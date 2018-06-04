
   window.onload=function(){
   	var imgData={'data':[{"src":'01.jpg'},{"src":'02.jpg'},{"src":'03.jpg'},{"src":'04.jpg'},{"src":'05.jpg'},{"src":'06.jpg'},]}
          window.onscroll=function(){
                  if (checkFlag()) {
                  	var cparent=document.getElementById('container');
                  	for (var i = 0; i < imgData.data.length; i++) {
                  		 var ccontent=document.createElement('div');
                  		 ccontent.className='box';
                  		 cparent.appendChild(ccontent);
                  		 var boximg=document.createElement('div');
                  		 boximg.className='box-img';
                  		 ccontent.appendChild(boximg);
                  		 var img=document.createElement('img');
                  		 img.src='img/'+imgData.data[i].src;
                  		 boximg.appendChild(img);
                  		 imgLocation("container","box");
                  	}
                  	
                  }
                  	
          }
          	imgLocation("container","box");



   }
 

    function checkFlag(){
    	var cparent=document.getElementById('container');
    	var ccontent=getChildElement(cparent,'box');
    	var lastContentHeight=ccontent[ccontent.length-1].offsetTop;
    	console.log(lastContentHeight);
    	//var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
    	//var pageHeight=document.documentElement.clientHeight||document.body.clientHeight;
    	  if (lastContentHeight) {
    	  	  return true;
    	  }
    }
    

   function imgLocation(parent,content){
   	//将parent全部的content取出;
   	var cparent=document.getElementById(parent);
   	var ccontent=getChildElement(cparent,content);
   	var imgWidth=ccontent[0].offsetWidth;
   	var num=Math.floor(document.documentElement.clientWidth/imgWidth);
   	cparent.style.cssText='width:'+imgWidth*num+'px;margin:0 auto';

   	var BoxHeightArr=[];
   	for (var i = 0; i < ccontent.length; i++) {
   		
               if (i<num) {
               	BoxHeightArr[i]=ccontent[i].offsetHeight;
               }else{
               	var minHeight=Math.min.apply(null,BoxHeightArr);
               	var minIndex=getminheightLocation(BoxHeightArr,minHeight);
               	ccontent[i].style.position='absolute';
               	ccontent[i].style.top=minHeight+'px';
               	ccontent[i].style.left=ccontent[minIndex].offsetLeft+'px';
               	BoxHeightArr[minIndex]=BoxHeightArr[minIndex]+ccontent[i].offsetHeight
               }
   		}
   }

//获取parent中所有的content;
 function getChildElement(parent,content){
           var contentArr=[];
           var allContent=parent.getElementsByTagName('*');
           for (var i = 0; i < allContent.length; i++) {
           	        if (allContent[i].className==content) {
           	        	contentArr.push(allContent[i]);
           	        }
           }
          return contentArr;
    }


//得到图片的最小高度的索引;
   function  getminheightLocation(BoxHeightArr,minHeight){
   	for(var i in BoxHeightArr){
   		if (BoxHeightArr[i]==minHeight) {
   			return i;
   		}
   	}
   }