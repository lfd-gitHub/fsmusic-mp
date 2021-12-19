// index.ts
import helloApi from '../../api/hello-api'

Page({
  data: {
    message:'Hello World'
  },
  async say() {
      const message = await helloApi.say() + '';
      this.setData({message})
  }
})
