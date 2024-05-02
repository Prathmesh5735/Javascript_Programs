
let count=0
let arr=["https://i.pinimg.com/736x/d5/0b/d2/d50bd25b9cc865495b31a97e7a1eed18.jpg","https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg","https://wallpaperaccess.com/full/285215.jpg","https://img.freepik.com/premium-photo/beautiful-magic-forest-landscape_849761-21558.jpg","https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg","https://www.wallpapertip.com/wmimgs/14-147852_background-untuk-foto-comic-nature-background-hd.jpg"]
setInterval(()=>{
    count=(count+1)%arr.length;
    document.querySelector('img').src=arr[count]
},3800)