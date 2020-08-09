// const query = {
//     sender: 'Sender',
//     receiver: 'receiver'
//   };

//   (function(w) {
//     if (!w) {
//       return;
//     }

//     const paramsStr = w.location.search.split('?')[1];
//     if (!paramsStr) {
//       return;
//     }
//     const paramsArr = paramsStr.split('&');
//     for (let i=0; i<paramsArr.length; i++) {
//       const elements = paramsArr[i].split('=')

//       if (elements instanceof Array && elements.length > 1) {
//         query[elements[0]] = decodeURIComponent(elements[1]);
//       }
//     }
//   })(window)


const query = {
	sender: "sender",
	receiver: "receiver"
};

(
	function (w) {
		let paraStr = w.location.search.split("?")[1] ;
		if (!paraStr) {
			return ;
		}
		let arr = paraStr.split ("&") ;
		for (let i = 0 ; i < arr.length ; ++i) {
			let key = arr[i].split ("=")[0] ;
			let elem = arr[i].split ("=")[1] ; 
			query[key] = decodeURIComponent(elem);
		}
	}
)(window);

console.log ("query" , query);