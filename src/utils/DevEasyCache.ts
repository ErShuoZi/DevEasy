import { CacheType } from "@/enum/index"
class DevEasyCache {
  storage: Storage
  constructor(cacheType: CacheType) {
    this.storage = cacheType === CacheType.Local ? localStorage : sessionStorage
  }
  setCache(key: string, value: any) {
    if (value) {
      this.storage.setItem(key, JSON.stringify(value))
    }
  }
  getCache(key: string) {
    const value = this.storage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }

  deleteCache(key: string) {
    this.storage.removeItem(key)
  }
  clearCache() {
    this.storage.clear()
  }
}

const localCache = new DevEasyCache(CacheType.Local)
const sessionCache = new DevEasyCache(CacheType.Session)
export { localCache, sessionCache }
