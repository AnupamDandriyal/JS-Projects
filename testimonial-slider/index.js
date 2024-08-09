const testimonial = [
  {
    userpic: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww',
    comment: 'I would also like to say thankyou to all your staff. Wow what agreat service, I love it! Apple impressed me on multiple levels.',
    name:'Rosetta Q'
  },
  {
    userpic: 'https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    comment: 'I love how my Apple mobile and tablet are both durable and user friendly. They are definitely worth it and have become so handy in my daily life.',
    name:'Emily Johnson'
  },
  {
    userpic: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww',
    comment: 'I am thrilled with the durable and user-friendly mobile and tablet devices from Apple. They are worth every penny and have proven to be incredibly handy in my daily life.',
    name:'Gabirel Waters'
  },
  {
    userpic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww',
    comment: `Apple's mobile and tablet products are incredibly durable, user-friendly, and worth every penny. I love how handy they are for both work and play. I highly recommend Apple to anyone looking for quality tech products.`,
    name:'Joe Thompson'
  },
  {
    userpic: 'https://images.unsplash.com/photo-1521676129211-b7a9e7592e65?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww',
    comment: 'Apple products are truly worth it. Their mobile and tablet devices are durable, user-friendly, and incredibly handy. I have been a loyal customer for years and have never been disappointed with the quality and performance. Thank you, Apple, for creating such amazing technology.',
    name:'Samantha Reynolds'
  },
 
]

const userpic = document.querySelector('.userpic');
const comment = document.querySelector('.comment');
const user = document.querySelector('.user');

let i = 0;
updatemsg(i)

function updatemsg(i) {
  try {
    userpic.src = `${testimonial[i].userpic}`;
    comment.innerHTML = `${testimonial[i].comment}`;
    user.innerHTML = `${testimonial[i].name}`;
    setTimeout(() => {
      i++;
      updatemsg(i);
    }, 5000);
  }
  catch (error) {
    console.log('This is the end!')
  }
  
}







/* userpic.src = `${testimonial[1].userpic}`;
comment.innerHTML = `${testimonial[1].comment}`;
user.innerHTML = `${testimonial[1].name}`; */


/*  
for (let i = 0; i < testimonial.length; i++) {
    if (i === (testimonial.length - 1)) {
      i = 0;
    }
    else {
      setTimeout(() => {
        userpic.src = `${testimonial[i].userpic}`;
        comment.innerHTML = `${testimonial[i].comment}`;
        user.innerHTML = `${testimonial[i].name}`;
      },2000)
    }
  }
*/