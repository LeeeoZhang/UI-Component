//tab
function Tab(tabContainer,tabs,contents,underline) {
    this.tabContainer = tabContainer
    this.tabs = tabs
    this.contents = contents
    this.underline =  underline || ''
    this.init()
}

Tab.prototype.getStyle = function(dom,attr) {
    return dom.currentStyle ? dom.currentStyle[attr] : getComputedStyle(dom, false)[attr]
}
Tab.prototype.bind = function() {
    let _this = this
    _this.tabContainer.addEventListener('click',function(event){
        let tabIndex
        if(event.target.tagName.toLocaleLowerCase() !== 'li') {
            return
        }
        tabIndex = Array.prototype.indexOf.call(_this.tabs,event.target)
        _this.tabs.forEach(function(node) {
            node.classList.remove('active')
        })
        if(_this.underline) {
            underline.style.left = tabIndex*parseInt(_this.getStyle(event.target,'width')) + 'px'
        }
        event.target.classList.add('active')
        _this.contents.forEach(function(node) {
            node.classList.remove('active')
        })
        _this.contents[tabIndex].classList.add('active')
    })
}
Tab.prototype.init = function() {
    if(this.underline) {
        underline.style.width = parseInt(this.getStyle(this.tabs[0],'width')) + 'px'
    }
    this.bind()
}

let tabContainer = document.querySelector('.tab1>.tab1-tabs')
let tabs = document.querySelectorAll('.tab1>.tab1-tabs>li')
let contents = document.querySelectorAll('.tab1>.tab1-content>li')
let underline = document.querySelector('.tab1>.tab1-tabs .underline')

let tabContainer2 = document.querySelector('.tab2>.tab2-tabs')
let tabs2 = document.querySelectorAll('.tab2>.tab2-tabs>li')
let contents2 = document.querySelectorAll('.tab2>.tab2-content>li')

let tabContainer3 = document.querySelector('.tab3>.tab3-tabs')
let tabs3 = document.querySelectorAll('.tab3>.tab3-tabs>li')
let contents3 = document.querySelectorAll('.tab3>.tab3-content>li')

new Tab(tabContainer,tabs,contents,underline)
new Tab(tabContainer2,tabs2,contents2)
new Tab(tabContainer3,tabs3,contents3)





