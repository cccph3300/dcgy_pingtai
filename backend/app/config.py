from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "超市配送"
    environment: str = "development"
    api_prefix: str = "/api"
    database_url: str = "sqlite:///./dev.db"
    jwt_secret: str = "change-me-in-production"
    jwt_algorithm: str = "HS256"
    access_token_expire_minutes: int = 60 * 24 * 7
    default_admin_username: str = "admin"
    default_admin_password: str = "admin123456"
    default_admin_phone: str = "18000002319"
    default_admin_nickname: str = "超市配送"
    cors_origins: str = "*"
    yhlc_base_url: str = "https://admin.dgyhlc.com/prod-api"

    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")

    @property
    def cors_origin_list(self) -> list[str]:
        if self.cors_origins.strip() == "*":
            return ["*"]
        return [item.strip() for item in self.cors_origins.split(",") if item.strip()]


@lru_cache
def get_settings() -> Settings:
    return Settings()
