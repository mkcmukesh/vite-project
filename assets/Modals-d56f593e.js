import{j as l}from"./index-95028873.js";import{C as o}from"./CopyButton-c01a7df5.js";import"./cally-40c1735b.js";const d=()=>l.jsx("div",{className:"w-[150px] h-[600px] z-50 bg-white border border-slate-600 rounded-lg  border-b border-gray-400 ",children:l.jsx("div",{className:"h-full overflow-x-auto overflow-y-auto",children:l.jsxs("div",{className:"h-full w-full min-w-max flex flex-col items-center gap-1 px-1 py-3 ",children:[l.jsxs("div",{className:"relative",children:[l.jsx("button",{className:"btn",onClick:()=>document.getElementById("my_modal_1").showModal(),children:"ESC + Close Button"}),l.jsx("dialog",{id:"my_modal_1",className:"modal",children:l.jsxs("div",{className:"modal-box",children:[l.jsx("h3",{className:"font-bold text-lg",children:"Hello!"}),l.jsx("p",{className:"py-4",children:"Press ESC key or click the button below to close"}),l.jsx("div",{className:"modal-action",children:l.jsx("form",{method:"dialog",children:l.jsx("button",{className:"btn",children:"Close"})})})]})}),l.jsx(o,{jsxCode:`<button className="btn" onClick={()=>
            document.getElementById('my_modal_1').showModal()}>ESC + Close Button</button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Press ESC key or click the button below to close</p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>`})]}),l.jsxs("div",{className:"relative",children:[l.jsx("button",{className:"btn",onClick:()=>document.getElementById("my_modal_2").showModal(),children:"ESC + Close Outside"}),l.jsxs("dialog",{id:"my_modal_2",className:"modal",children:[l.jsxs("div",{className:"modal-box",children:[l.jsx("h3",{className:"font-bold text-lg",children:"Hello!"}),l.jsx("p",{className:"py-4",children:"Press ESC key or click outside to close"})]}),l.jsx("form",{method:"dialog",className:"modal-backdrop",children:l.jsx("button",{children:"close"})})]}),l.jsx(o,{jsxCode:`<button className="btn" onClick={()=>
            document.getElementById('my_modal_2').showModal()}>open modal</button>
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Press ESC key or click outside to close</p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>`})]}),l.jsxs("div",{className:"relative",children:[l.jsx("button",{className:"btn",onClick:()=>document.getElementById("my_modal_3").showModal(),children:'ESC+Close "X"'}),l.jsx("dialog",{id:"my_modal_3",className:"modal",children:l.jsxs("div",{className:"modal-box",children:[l.jsx("form",{method:"dialog",children:l.jsx("button",{className:"btn btn-sm btn-circle btn-ghost absolute right-2 top-2",children:"✕"})}),l.jsx("h3",{className:"font-bold text-lg",children:"Hello!"}),l.jsx("p",{className:"py-4",children:"Press ESC key or click on ✕ button to close"})]})}),l.jsx(o,{jsxCode:`{/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>ESC+Close
            "X"</button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Press ESC key or click on ✕ button to close</p>
              </div>
            </dialog>`})]}),l.jsxs("div",{className:"relative",children:[l.jsx("button",{className:"btn",onClick:()=>document.getElementById("my_modal_4").showModal(),children:"open modal"}),l.jsx("dialog",{id:"my_modal_4",className:"modal",children:l.jsxs("div",{className:"modal-box w-11/12 max-w-5xl",children:[l.jsx("h3",{className:"font-bold text-lg",children:"Hello!"}),l.jsx("p",{className:"py-4",children:"Click the button below to close"}),l.jsx("div",{className:"modal-action",children:l.jsx("form",{method:"dialog",children:l.jsx("button",{className:"btn",children:"Close"})})})]})}),l.jsx(o,{jsxCode:`{/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={()=>document.getElementById('my_modal_4').showModal()}>open modal</button>
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box w-11/12 max-w-5xl">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Click the button below to close</p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>`})]}),l.jsxs("div",{className:"relative",children:[l.jsx("button",{className:"btn",onClick:()=>document.getElementById("my_modal_4").showModal(),children:"Dialog modal with custom width"}),l.jsx("dialog",{id:"my_modal_4",className:"modal",children:l.jsxs("div",{className:"modal-box w-11/12 max-w-5xl",children:[l.jsx("h3",{className:"font-bold text-lg",children:"Hello!"}),l.jsx("p",{className:"py-4",children:"Click the button below to close"}),l.jsx("div",{className:"modal-action",children:l.jsx("form",{method:"dialog",children:l.jsx("button",{className:"btn",children:"Close"})})})]})}),l.jsx(o,{jsxCode:`{/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={()=>document.getElementById('my_modal_4').showModal()}>open modal</button>
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box w-11/12 max-w-5xl">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Click the button below to close</p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>`})]}),l.jsxs("div",{className:"relative",children:[l.jsx("button",{className:"btn",onClick:()=>document.getElementById("my_modal_5").showModal(),children:"Responsive modal"}),l.jsx("dialog",{id:"my_modal_5",className:"modal modal-bottom sm:modal-middle",children:l.jsxs("div",{className:"modal-box",children:[l.jsx("h3",{className:"font-bold text-lg",children:"Hello!"}),l.jsx("p",{className:"py-4",children:"Press ESC key or click the button below to close"}),l.jsx("div",{className:"modal-action",children:l.jsx("form",{method:"dialog",children:l.jsx("button",{className:"btn",children:"Close"})})})]})}),l.jsx(o,{jsxCode:`{/* Responsive the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Hello!</h3>
                <p className="py-4">Press ESC key or click the button below to close</p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>`})]}),l.jsxs("div",{className:"relative",children:[l.jsx("a",{href:"#my_modal_8",className:"btn",children:"Modal using anchor link"}),l.jsx("div",{className:"modal",role:"dialog",id:"my_modal_8",children:l.jsxs("div",{className:"modal-box",children:[l.jsx("h3",{className:"text-lg font-bold",children:"Hello!"}),l.jsx("p",{className:"py-4",children:"This modal works with anchor links"}),l.jsx("div",{className:"modal-action",children:l.jsx("a",{href:"#",className:"btn",children:"Yay!"})})]})}),l.jsx(o,{jsxCode:`{/* The button to open modal */} <a href="#my_modal_8" className="btn">open modal</a>

            {/* Put this part before </body> tag */}
            <div className="modal" role="dialog" id="my_modal_8">
              <div className="modal-box">
                <h3 className="text-lg font-bold">Hello!</h3>
                <p className="py-4">This modal works with anchor links</p>
                <div className="modal-action">
                  <a href="#" className="btn">Yay!</a>
                </div>
              </div>
            </div>`})]})]})})});export{d as default};
