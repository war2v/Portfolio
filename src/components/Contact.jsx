



import React from "react";

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "45f94151-ff20-405d-b3d3-c4764063a789");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div className="w-screen max-w-xs flex justify-center m-auto p-4 bg-gray-200 
                shadow-lg 
                border 
                border-gray-300" >
      <form onSubmit={onSubmit}>
            <span class="relative flex h-3 w-3 y-1">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
          </span>
            <input className=' focus:border-none' placeholder="Full Name" type="text" name="name"/>
            <input className=' border-gray border-t' placeholder="Email" type="email" name="email"/>
            <input className=' border-gray border-t' placeholder="Company" type="text" name="company"/>
            <textarea className=' border-gray border-t border-b' placeholder='Message' name="message"></textarea>
            <div className="flex justify-center">
                <button className='px-10 shadow-[0_9px_0_rgb(0,0,0)] border-gray p-2 border-2 bg-purple-600 rounded-lg hover:shadow-[0_4px_0px_rgb(0,0,0)]  hover:bg-purple-500 ease-out hover:translate-y-1 transition-all' type="submit">Submit Form
                </button>
            </div>
      </form>
    </div>
  );
}

export default Contact;
