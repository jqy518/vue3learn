import { defineStore } from 'pinia'
export type UserInfo = {
  name: string
  age: number
  width: string
  height: string
}
export const useStore = defineStore('main', {
  state: () => {
    return {
      name: 'zhangsan',
      age: 16,
      height: '160cm',
      width: '120cm'
    } as UserInfo
  }
})
