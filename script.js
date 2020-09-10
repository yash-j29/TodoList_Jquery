let inpnewtask=$('#inpnewtask')
let btnadd=$('#btnadd')
let btnclear=$('#btnclear')
let ultasks=$('#ultasks')
let btnclean=$('#btnclean')
let btnsort=$('#btnsort')
let btnac=$('#btnac')

function additem(){
let listitem=$('<li>',{
    class:'list-group-item',
    text:inpnewtask.val()
})

listitem.click((event)=>{
    //$(this).toggleClass('disabled') This will not work bcs it $(this) gives object and not the targeted element
    $(event.target).toggleClass('done')
})
ultasks.append(listitem)
    inpnewtask.val('')
    toggleclearAddbtn()

}
function cleardone(){
    $('#ultasks .done').remove()
    toggleclearAddbtn()
}
inpnewtask.keypress((e)=>{
    if(e.which==13){
        additem()
    }
})
function sort(){
    $('#ultasks .done').appendTo(ultasks)
    toggleclearAddbtn()
}

function toggleclearAddbtn(){


    btnclear.prop('disabled',inpnewtask.val() =='' )
 btnadd.prop('disabled',inpnewtask.val() =='' )
 btnsort.prop('disabled',ultasks.children().length< 1)
 btnclean.prop('disabled',ultasks.children().length< 1)
 btnac.prop('disabled',ultasks.children().length< 1)


}

inpnewtask.on('input', toggleclearAddbtn)

btnadd.click(()=>{
    additem()
})


btnclear.click(()=>{
    inpnewtask.val('')
toggleclearAddbtn()
})
btnclean.click(cleardone)
btnsort.click(sort)


btnac.click(()=>{
    ultasks.children().remove()
    toggleclearAddbtn()
    
})






