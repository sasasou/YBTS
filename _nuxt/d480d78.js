(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{266:function(t,n,e){"use strict";e.r(n);e(182);var l={props:{json:{type:Object,required:!0}},data:function(){return{inputisbn:null,couponnum:0,sellisbn:[],columns:[{field:"id",label:"ID",width:"40"},{field:"isbn",label:"ISBN"}]}},methods:{addISBN:function(){var t=this;null===this.json.isbn?(this.$emit("addlog","E-000",null),this.$buefy.toast.open({message:"データがインポートされていません",type:"is-danger"})):!function(){for(var i=0;i<t.sellisbn.length;i++)if(t.sellisbn[i].isbn===t.inputisbn)return!0;return!1}()?String(t.inputisbn)in t.json.isbn?t.json.isbn[String(t.inputisbn)].issold?(this.$emit("addlog","E-003",this.inputisbn),this.$buefy.toast.open({message:this.inputisbn+" は既に売れています",type:"is-danger"})):(this.sellisbn.push({}),this.sellisbn[this.sellisbn.length-1].id=this.sellisbn.length,this.sellisbn[this.sellisbn.length-1].isbn=this.inputisbn,this.inputisbn=null):(this.$emit("addlog","E-002",this.inputisbn),this.$buefy.toast.open({message:this.inputisbn+" なんて本は存在しません",type:"is-danger"})):(console.log("E-001"),this.$emit("addlog","E-001",this.inputisbn),this.$buefy.toast.open({message:this.inputisbn+" は既に追加されています",type:"is-danger"}))},removeAllISBN:function(){this.sellisbn.splice(0)},sell:function(){0===this.sellisbn.length?(this.$emit("addlog","E-004",this.sellisbn),this.$buefy.toast.open({message:"ISBNが入力されていません",type:"is-danger"})):this.sellisbn.length<this.couponnum?(this.$emit("addlog","E-005",this.couponnum),this.$emit("addlog","E-006",this.sellisbn),this.$buefy.toast.open({message:"クーポンは "+this.couponnum+"枚で 本の数 "+this.sellisbn.length+" を超えています",type:"is-danger"})):(this.$emit("sell",this.sellisbn),this.$emit("addCoupon",this.couponnum,this.sellisbn),this.$buefy.toast.open({message:this.sellisbn.length+" 冊の本を売却しました"}),this.removeAllISBN())}}},o=e(45),component=Object(o.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("b-field",{attrs:{message:"ISBNを入力してください"}},[e("b-input",{attrs:{placeholder:"ISBN"},model:{value:t.inputisbn,callback:function(n){t.inputisbn=n},expression:"inputisbn"}}),t._v(" "),e("b-button",{attrs:{type:"is-primary",label:"追加"},on:{click:t.addISBN}})],1),t._v(" "),e("b-table",{attrs:{data:t.sellisbn,columns:t.columns}}),t._v(" "),e("b-field",{attrs:{message:"クーポンの数を入力してください"}},[e("b-numberinput",{attrs:{min:"0",placeholder:"0","controls-position":"compact"},model:{value:t.couponnum,callback:function(n){t.couponnum=n},expression:"couponnum"}})],1),t._v(" "),e("b-button",{attrs:{type:"is-info",label:"すべて売却"},on:{click:t.sell}}),t._v(" "),e("b-button",{attrs:{type:"is-danger",label:"全追加取り消し"},on:{click:t.removeAllISBN}})],1)}),[],!1,null,"7df67c4c",null);n.default=component.exports}}]);