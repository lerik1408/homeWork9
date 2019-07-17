exports.homePage = async (ctx) => {
    await ctx.render('index',{
        user: "John"
    })
}
exports.siginInPage = async (ctx) => {
    await ctx.render('siginIn.njk',{
        title:'Sigin In'
    })
}
exports.passwordRecoveryPage = async(ctx) => {
    await ctx.render('passwordRecovery.njk',{
        title: 'passwordRecovery'
    })
}
exports.passwordRecovery1Page = async(ctx) => {
    await ctx.render('passwordRecovery1.njk',{
        title: 'passwordRecovery1'
    })
}
exports.passwordRecovery2Page = async(ctx) => {
    await ctx.render('passwordRecovery2.njk',{
        title: 'passwordRecovery2'
    })
}
exports.siginUpPage = async(ctx) => {
    await ctx.render('siginUp.njk',{
        title: 'Sigin Up'
    })
}
exports.siginUp1Page = async(ctx) => {
    await ctx.render('siginUp1.njk',{
        title: "Sigin Up 1"
    })
}
exports.siginUp2Page = async(ctx) => {
    await ctx.render('siginUp2.njk',{
        title: "Sigin Up 2"
    })
}
exports.accInfoPage = async(ctx) => {
    await ctx.render('accinfo.njk',{
        title: "Account information"
    })
}
exports.personInfoPage = async(ctx) => {
    await ctx.render('personInfo.njk',{
        title: "Person information"
    })
}
exports.searchPage = async(ctx) => {
    await ctx.render('search.njk',{
        title: "Search",
        people : [
            {"img":"./img/search/people1.png","name":"Richard Thompson","rating":"gold","country":"Vancouver, Canada","skills":"Python, Django, Sketch","price":"$ 1,200 USD"},
            {"img":"./img/search/people2.png","name":"Ivana Pupkina","rating":"gold","country":"Vancouver, Canada","skills":"Django,Python, Sketch","price":"$ 1,000 USD"},
            {"img":"./img/search/people3.png","name":"Pupkina Anastasia","rating":"bronze","country":"Vancouver, Canada","skills":"NodeJs, AngularJs","price":"$ 1,300 USD"},
            {"img":"./img/search/people4.png","name":"Richard Thompson","rating":"none","country":"Vancouver, Canada","skills":"VueJs, React Native, QA","price":"$ 1,500 USD"},
            {"img":"./img/search/people5.png","name":"Richard Thompson","rating":"gold","country":"Vancouver, Canada","skills":"Php, Smesitel","price":"$ 900 USD"},
            {"img":"./img/search/people5.png","name":"Richard Thompson","rating":"silver","country":"Vancouver, Canada","skills":"Stack: React, jQuery","price":"$ 700 USD"}
        ]
    })
}
exports.messengerPage = async(ctx) => {
    await ctx.render('messenger.njk',{
        title: "Messenger",
        users : [{"name":"Miranda Hops","status":"Excepteur sint occaecatar…","time":"9:32","img":'./img/messenger/fr1.png',"mute":true},{"name":"Barry Callebaut","status":"Nemo enim ipsam volupta…","time":"22:01","img":'./img/messenger/fr2.png'},{"name":"Stacey Dosh","status":"Ut enim ad minima veniam…","time":"19:15","img":'./img/messenger/fr3.png',"active":true},{"name":"Michael Kors","status":"To take a trivial example…","time":"13:49","img":'./img/messenger/fr4.png'},{"name":"Johny Cash","status":"Great explorer of the truth…","time":"10:25","img":'./img/messenger/fr5.png'},{"name":"Stacey Dosh","status":"Ut enim ad minima veniam…","time":"9:32","img":'./img/messenger/fr6.png'}],
        messageAnother : [{"img":"./img/messenger/fr3.png","text":"On the other hand, we denounce with righteous indignation!","time":"01:14"},{"img":"./img/messenger/fr3.png","text":"But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures","time":"02:05"},{"img":"./img/messenger/fr3.png","text":"But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures","time":"02:05"}],
        messageUser : [{"text":"Which is the same as saying?","time":"01:38"},{"text":"To take a trivial example, which of us ever undertakes)","time":"03:25"},{"text":"To take a trivial example, which of us ever undertakes)","time":"03:25"}]
    })
}