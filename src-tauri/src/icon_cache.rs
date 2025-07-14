use serde::{Deserialize, Serialize};

// 代表一个缓存的图标
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CachedIcon {
    pub data: String,
    pub timestamp: u64,
} 
