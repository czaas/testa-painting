function shuffle(e){for(var a,t,n=e.length;n>0;)t=Math.floor(Math.random()*n),n--,a=e[n],e[n]=e[t],e[t]=a;return e}var testimonialsArray=[{name:"Vicky W.",link:"http://www.yelp.com/biz/testa-painting-pismo-beach?hrid=N2fXc-lUPlHsiEqY0dU5nw&page_src=shared_via_messages_or_emails",testimony:["A little over due...we live in the Bay Area and needed the condo our sons live in painted in early December. Tony provided a very fair estimate. We went down the day before the job started, met Tony the next morning and stayed in town through the completion.","Excellent work! Tony and his crew were neat, cleaned up after themselves and thorough with every aspect. We highly recommend Tony!"]},{name:"Meegan C.",link:"http://www.yelp.com/biz/testa-painting-pismo-beach?hrid=wf0Zd5zj8PD7-l9pxZc7_g&page_src=shared_via_messages_or_emails",testimony:["Tony and his crew are the best, simply amazing. Not only do they leave you with a beautiful home with a quality paint job, they are a pleasure to have around!  If you need to hire a painter, do yourself a favor and hire Tony Testa!"]},{name:"Linda O.",link:"http://www.yelp.com/biz/testa-painting-pismo-beach?hrid=r07EQfSRQhI_ZoWyv8GL6A&page_src=shared_via_messages_or_emails",testimony:["Tony and his crew showed up on time and did a great job.  No mess was left behind and no overpainting or scraping needed when they left.  They are very professional.  I would highly recommend them to anyone who needs a good painter with reasonable rates.  It doesn't get any better then Testa Painting.  Call Tony"]}],app={};app.testimonials=testimonialsArray,app.displayTestimonials=function(e){function a(e,a){var t='<p><strong><a href="'+e+'" target="_blank">'+a+"</a></strong></p>";return t}function t(e){for(var a="",t=0;t<e.length;t++)a+="<p>"+e[t]+"</p>";return a}var n,i,o;shuffle(e);for(var r in e)i=a(e[r].link,e[r].name),n=t(e[r].testimony),o='<div class="yelp">'+n+i+"</div>",$("#testimonials").append(o)},app.displayTestimonials(app.testimonials);