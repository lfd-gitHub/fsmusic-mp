// components/scrollable-section/index.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      hasMore:{
        type:Boolean,
        value:true
      },
      title:{
        type:String,
      },
      scrollX:{
        type:Boolean,
        value:true
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
     
  },

  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {
       console.log("=====",this.properties,"=====")
     },
    moved: function () { },
    detached: function () { },
  },

  /**
   * 组件的方法列表
   */
  methods: {
      
  }
})
