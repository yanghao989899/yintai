$(function(){
	/*line部分的获取*/
	var box1=$("li",$(".container_F4_R")[0]);
	var box2=$("li",$(".container_F4_R")[1]);
	var box3=$("li",$(".container_F4_R")[2]);
	var box4=$("li",$(".container_F4_R")[3]);
	var box5=$("li",$(".container_F4_R")[4]);
	var box6=$("li",$(".container_F4_R")[5]);
	var box7=$("li",$(".container_F4_R")[6]);
	var box8=$("li",$(".container_F4_R")[7]);
	var box9=$("li",$(".container_F4_R")[8]);
	var box10=$("li",$(".container_F1_L_B")[0]);
	var box11=$("li",$(".container_F1_L_B")[1]);
	var box12=$("li",$(".container_F1_L_B")[2]);
	/*banner部分的获取*/
	var bannerw=$(".banner")[0];
	var banner=$(".bannerbox",$(".banner")[0]);
	var lis=$("li",$(".btnbox")[0]);
    var flag=true;
    /*banner部分固定定位的获取*/
    var fixtp=$(".fixtp")[0];
	/*banner部分的初始化*/
	/*bannerz左右按钮的获取*/
	var pn=$(".pn")[0];
	var pre=$(".pre",pn)[0];
	var nex=$(".nex",pn)[0];
	/*选项卡部分的获取*/
	var list=$("li",$(".h_list_all")[0]);
	var xxk=$(".xxk");
	/*下面选项卡的获取*/
	var card=$("li",$(".container_F1_L_T")[0]);
	var cardcontent=$(".container_F1_L_B");
	/*line部分的遍历*/
	for (var i = 0; i < box1.length; i++) {
		line(box1[i])
	}
	for (var i = 0; i < box2.length; i++) {
		line(box2[i])
	}
	for (var i = 0; i < box3.length; i++) {
		line(box3[i])
	};
	for (var i = 0; i < box4.length; i++) {
		line(box4[i])
	};
	for (var i = 0; i < box5.length; i++) {
		line(box5[i])
	}
	for (var i = 0; i < box6.length; i++) {
		line(box6[i])
	};
	for (var i = 0; i < box7.length; i++) {
		line(box7[i])
	}
	for (var i = 0; i < box8.length; i++) {
		line(box8[i])
	};
	for (var i = 0; i < box9.length; i++) {
		line(box9[i])
	}
	for (var i = 0; i < box10.length; i++) {
		line(box10[i])
	}
	for (var i = 0; i < box11.length; i++) {
		line(box11[i])
	}
	for (var i = 0; i < box12.length; i++) {
		box12[i].index=i;
		box12[i].onmouseover=function(){
			for (var i = 0; i < box12.length; i++) {
				box12[i].style.opacity=1;
			};
			box12[this.index].style.opacity=0.8;
		}
	}
	/*line部分的函数*/
    function line(obj){
       var top=$(".top",obj)[0];
	   var bottom=$(".bottom",obj)[0];
	   var right=$(".right",obj)[0];
	   var left=$(".left",obj)[0];
	   var bw=obj.offsetWidth;
	   var bh=obj.offsetHeight;
	   obj.onmouseover=function(){
		    animate(top,{width:bw})
	        animate(bottom,{width:bw})
	        animate(right,{height:bh})
	        animate(left,{height:bh})
	    }
	    obj.onmouseout=function(){
	        animate(left,{height:0});
	        animate(right,{height:0});
	        animate(top,{width:0});
	        animate(bottom,{width:0});
	    } 
    }
    /*选项卡部分动画*/
	for (var i = 0; i < list.length; i++) {
		list[i].index=i;
		list[i].onmouseover=function(){
			xxk[this.index].style.display="block";
		}
		list[i].onmouseout=function(){
			xxk[this.index].style.display="none";
		}
	}
	/*第三部分的选项卡*/
	var container_F3_B_R_B=$(".container_F3_B_R_B",$(".container_F3_B_R")[0]);
	var btns=$("li",$(".container_F3_B_R_T")[0]);
	container_F3_B_R_B[0].style.display="block";
	container_F3_B_R_B[1].style.display="none";
    btns[0].style.fontWeight="bold";
    btns[0].style.borderBottom="3px solid #e5004f";
	for (var i = 0; i < btns.length; i++) {
		btns[i].index=i;
		btns[i].onmouseover=function(){
			for (var i = 0; i < container_F3_B_R_B.length; i++) {
				container_F3_B_R_B[i].style.display="none";
				btns[i].style.fontWeight="400";
				btns[i].style.borderBottom="3px solid #333";	
			};
        container_F3_B_R_B[this.index].style.display="block";
        btns[this.index].style.fontWeight="bold";
        btns[this.index].style.borderBottom="3px solid #e5004f";
		}
	};
		/*小轮播的获取*/
	var Left=$(".Left")[0];
	var Right=$(".Right")[0];
	var Left1=$(".Left")[1];
	var Right1=$(".Right")[1];
	var Left2=$(".Left")[2];
	var Right2=$(".Right")[2];
	var Left3=$(".Left")[3];
	var Right3=$(".Right")[3];
	var Left4=$(".Left")[4];
	var Right4=$(".Right")[4];
	var Left5=$(".Left")[5];
	var Right5=$(".Right")[5];
	var Left6=$(".Left")[6];
	var Right6=$(".Right")[6];
	var Left7=$(".Left")[7];
	var Right7=$(".Right")[7];
	var container_F4_M1=$(".wflb",$(".container_F4_M")[0])[0];
	var container_F4_M2=$(".wflb",$(".container_F4_M")[1])[0];
	var container_F4_M3=$(".wflb",$(".container_F4_M")[2])[0];
	var container_F4_M5=$(".wflb",$(".container_F4_M")[4])[0];
	var container_F4_M6=$(".wflb",$(".container_F4_M")[5])[0];
	var container_F4_M7=$(".wflb",$(".container_F4_M")[6])[0];
	var container_F4_M8=$(".wflb",$(".container_F4_M")[7])[0];
	var container_F4_M9=$(".wflb",$(".container_F4_M")[8])[0];
	var btns1=$("li",$(".container_F4_M")[0]);
	var btns2=$("li",$(".container_F4_M")[1]);
	var btns3=$("li",$(".container_F4_M")[2]);
	var btns5=$("li",$(".container_F4_M")[4]);
	var btns6=$("li",$(".container_F4_M")[5]);
	var btns7=$("li",$(".container_F4_M")[6]);
	var btns8=$("li",$(".container_F4_M")[7]);
	var btns9=$("li",$(".container_F4_M")[8]);
	function LB(obj,obj1,btn1,btn2){
		obj[0].style.background="#e5004f"
        obj[1].style.background="#999";
		obj[0].onclick=function(){
            animate(obj1,{left:0});
            obj[0].style.background="#e5004f"
            obj[1].style.background="#999";
		}
		obj[1].onclick=function(){
            animate(obj1,{left:-390});
            obj[1].style.background="#e5004f"
            obj[0].style.background="#999";
		}
		btn2.onclick=function(){
			obj[1].style.background="#e5004f"
            obj[0].style.background="#999";
			animate(obj1,{left:-390});
		}
		btn1.onclick=function(){
		    obj[0].style.background="#e5004f"
            obj[1].style.background="#999";
			animate(obj1,{left:0});
		}
	}
	LB(btns1,container_F4_M1,Right,Left);
	LB(btns2,container_F4_M2,Right1,Left1);
	LB(btns3,container_F4_M3,Right2,Left2);
	LB(btns5,container_F4_M5,Right3,Left3);
	LB(btns6,container_F4_M6,Right4,Left4);
	LB(btns7,container_F4_M7,Right5,Left5);
	LB(btns8,container_F4_M8,Right6,Left6);
	LB(btns9,container_F4_M9,Right7,Left7);
	/*品牌轮播*/
	var lbjtl=$(".lbjtl");
	var lbjtr=$(".lbjtr");
	var box=$(".container_F4_L_B_mainB");
	function moveR1(obj){
		var out=firstChild(obj);
         animate(obj,{left:-160},function(){
         	obj.style.left=0;
         	out1=out.cloneNode(true);
         	obj.removeChild(out);
            obj.appendChild(out1);
            flag=true;
         })    
	}
	function moveL1(obj){
		var out=lastChild(obj);
        out1=out.cloneNode(true);
		obj.removeChild(out);
        appendBefore(out1,obj);
        obj.style.left="-160px";
		animate(obj,{left:0},function(){
			flag=true;
		});        
	}
	for (var i = 0; i < lbjtl.length; i++) {
		lbjtl[i].index=i;
		lbjtl[i].onclick=function(){
			for (var i = 0; i < box.length; i++) {
				box[i].index=i;
				moveR1(box[this.index]);
			}
		}
	}
	for (var i = 0; i < lbjtr.length; i++) {
		lbjtr[i].index=i;
		lbjtr[i].onclick=function(){
			for (var i = 0; i < box.length; i++) {
				box[i].index=i;
				moveL1(box[this.index]);
			}
		}
	};
	/*banner部分的轮播方法*/
	var num=0;
	var t=setInterval(moveR,3000);
	var flag=true;
	function moveL(){
		num--;
		if (num<0) {
			num=banner.length-1;
		};
		for (var i = 0; i < banner.length; i++) {
			banner[i].style.opacity=0;
			lis[i].style.background="#211616";
		}
		animate(banner[num],{opacity:1},800,function(){
		    	flag=true;
		    });
		lis[num].style.background="#e5004f";
	}
	function moveR(){
		num++;
		if (num==banner.length) {
			num=0;
		};
		for (var i = 0; i < banner.length; i++) {
			banner[i].style.opacity=0;
			lis[i].style.background="#211616";
		}
		animate(banner[num],{opacity:1},800,function(){
		    	flag=true;
		    });
		lis[num].style.background="#e5004f";
	}
		/*banner左右键的动画*/
	bannerw.onmouseover=function(){
		clearInterval(t);
		pn.style.display="block";
	}
	bannerw.onmouseout=function(){
		t=setInterval(moveR,3000);
		pn.style.display="none";
	}
	pre.onclick=function(){
		if (flag) {
			flag=false;
			moveL();
		};
	}
	nex.onclick=function(){
		if (flag) {
			flag=false;
			moveR();
		};
		
	}
	/*banner部分鼠标移动事件*/
	for (var i = 0; i < lis.length; i++) {
		lis[i].index=i;
		lis[i].onmouseover=function(){
            for (var j = 0; j < banner.length; j++) {
			    banner[j].style.opacity=0;
			    lis[j].style.background="#211616";
		    }
		    animate(banner[this.index],{opacity:1},300,function(){
		    	flag=true;
		    });
		    lis[this.index].style.background="#e5004f";
		    num=this.index;
	    }
	};

	/*banner部分固定定位的动画*/
	fixtp.onmouseover=function(){
		animate(fixtp,{right:90})
	}
	fixtp.onmouseout=function(){
		animate(fixtp,{right:80})
	}
	/*下面选项卡的初始化*/
	for (var i = 0; i < card.length; i++) {
		cardcontent[0].style.display="block";
		cardcontent[i].style.display="none";
		card[i].style.fontWeight="400";
		card[0].style.fontWeight="bold";
		card[i].style.borderBottom="5px solid #333";
		card[0].style.borderBottom="5px solid #e5004f";
	};
	/*下面选项卡的动画*/
	for (var i = 0; i < card.length; i++) {
		card[i].index=i;
		card[i].onmouseover=function(){
			for (var i = 0; i < cardcontent.length; i++) {
				cardcontent[i].style.display="none";
				card[i].style.fontWeight="400";
				card[i].style.borderBottom="5px solid #333";	
			};
        cardcontent[this.index].style.display="block";
        card[this.index].style.fontWeight="bold";
        card[this.index].style.borderBottom="5px solid #e5004f";
		}
	};
	var float_nav=$(".float_nav")[0];
	window.onscroll=function(){
	    var obj=document.body.scrollTop?document.body:document.documentElement;
	    var scrollTop=obj.scrollTop;
	    if (obj.scrollTop>=664) {
            float_nav.style.display="block";
	    }else{
	    	float_nav.style.display="none";
	    }
	}
	var divs=$("div",$(".float_nav")[0]);
	var floors=$(".container_F4");
	var arr=[];
	for (var i = 0; i < floors.length; i++) {
	    arr.push(floors[i].offsetTop);
	};
	        for (var i = 0; i < divs.length; i++) {
	        	divs[i].index=i;
	        	divs[i].onclick=function(){
	        		flag=false;
	        		for (var i = 0; i < divs.length; i++) {
	        			
	        			// lis[i].style.background="#fff";
	        		};
                    // lis[this.index].style.background="pink";
	        		animate(document.body,{scrollTop:arr[this.index]})
	        		animate(document.documentElement,{scrollTop:arr[this.index]})
	        	}
	        }



	var wx=$(".wx");
    var wxxxk=$(".wxxxk");
    for(var i=0;i<wx.length;i++){
        wx[i].index=i;
        wx[i].onmouseover=function(){
            wxxxk[this.index].style.display="block";
        }
        wx[i].onmouseout=function(){
            wxxxk[this.index].style.display="none";
        }
    }


    var sjyt=$(".sjyt");
    var sjytxxk=$(".sjytxxk");
    for(var i=0;i<sjyt.length;i++){
        sjyt[i].index=i;
        sjyt[i].onmouseover=function(){
            sjytxxk[this.index].style.display="block";
        }
        sjyt[i].onmouseout=function(){
            sjytxxk[this.index].style.display="none";
        }
    }

})