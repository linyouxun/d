const get = (params,url) =>{
  return new Promise((resolve,reject)=>{
    $.get(url,params,(data,status)=>{
      resolve(data);
    });
  })
}
const sendMsg = ()=>{
  const url = document.querySelector('input[name=url]').value;
  const params = document.querySelector('input[name=params]').value;
  const arr = params.split('&')
  const paramsObj = {};
  for (var i = 0; i < arr.length; i++) {
    const [key,value] = arr[i].split('=');
    paramsObj[key] = value;
  }
  getData(paramsObj,url);
}
const getData = async (params,url)=>{
  const data = await get(params,url);
  console.log(data);
}

const Tools ={
  sendMsg:sendMsg
}
if ( typeof window === "object" && typeof window.document === "object" ) {
  window.Tools = Tools;
}
export default Tools;
