export default async function catchFn(callBack) {
   let res

   try {
    res =  await callBack()
   }
   catch {
    console.log(res)
    this.$showModal({
        title: '警告',
        context: '当前请求发生错误'
    })
    res = false
   }
   return res
}