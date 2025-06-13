import{j as e}from"./index-b113a18f.js";import{C as t}from"./CopyButton-320cca2e.js";import"./cally-40c1735b.js";const l=()=>e.jsx("div",{className:"w-[150px] h-[600px] z-50 bg-white border border-slate-600 rounded-lg  border-b border-gray-400 ",children:e.jsx("div",{className:"h-full overflow-x-auto overflow-y-auto",children:e.jsxs("div",{className:"h-full w-full min-w-max flex flex-col items-center gap-1 px-1 py-3 ",children:[e.jsx("div",{children:e.jsxs("div",{className:"relative",children:[e.jsx("input",{className:"input validator",type:"email",required:!0,placeholder:"mail@site.com"}),e.jsx(t,{jsxCode:'<input className="input validator" type="email" required placeholder="mail@site.com" />'})]})}),e.jsx("div",{children:e.jsxs("div",{className:"relative",children:[e.jsx("input",{className:"input validator",type:"email",required:!0,placeholder:"mail@site.com"}),e.jsx(t,{jsxCode:'<div className="validator-hint">Enter valid email address</div>'})]})}),e.jsx("div",{children:e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"password",className:"input validator",required:!0,placeholder:"Password",minlength:"8",pattern:"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",title:"Must be more than 8 characters, including number, lowercase letter, uppercase letter"}),e.jsxs("p",{className:"validator-hint",children:["Must be more than 8 characters, including",e.jsx("br",{}),"At least one number",e.jsx("br",{}),"At least one lowercase letter",e.jsx("br",{}),"At least one uppercase letter"]}),e.jsx(t,{jsxCode:`<input type="password" className="input validator" required placeholder="Password" minlength="8" 
  pattern="(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
  title="Must be more than 8 characters, including number, lowercase letter, uppercase letter" />
<p className="validator-hint">
  Must be more than 8 characters, including
  <br/>At least one number
  <br/>At least one lowercase letter
  <br/>At least one uppercase letter
</p>`})]})}),e.jsx("div",{children:e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"input",className:"input validator",required:!0,placeholder:"Username",pattern:"[A-Za-z][A-Za-z0-9\\-]*",minlength:"3",maxlength:"30",title:"Only letters, numbers or dash"}),e.jsxs("p",{className:"validator-hint",children:["Must be 3 to 30 characters",e.jsx("br",{}),"containing only letters, numbers or dash"]}),e.jsx(t,{jsxCode:`<input type="input" className="input validator" required placeholder="Username" 
  pattern="[A-Za-z][A-Za-z0-9-]*" minlength="3" maxlength="30" title="Only letters, numbers or dash" />
<p className="validator-hint">
  Must be 3 to 30 characters
  <br/>containing only letters, numbers or dash
</p>`})]})}),e.jsx("div",{children:e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"tel",className:"input validator tabular-nums",required:!0,placeholder:"Phone",pattern:"[0-9]*",minlength:"10",maxlength:"10",title:"Must be 10 digits"}),e.jsx("p",{className:"validator-hint",children:"Must be 10 digits"}),e.jsx(t,{jsxCode:`<input type="tel" className="input validator tabular-nums" required placeholder="Phone" 
  pattern="[0-9]*" minlength="10" maxlength="10" title="Must be 10 digits" />
<p className="validator-hint">Must be 10 digits</p>`})]})}),e.jsx("div",{children:e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"url",className:"input validator",required:!0,placeholder:"https://",value:"https://",pattern:"^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9-].*[a-zA-Z0-9])?.)+[a-zA-Z].*$",title:"Must be valid URL"}),e.jsx("p",{className:"validator-hint",children:"Must be valid URL"}),e.jsx(t,{jsxCode:`<input type="url" className="input validator" required placeholder="https://" value="https://"
  pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9-].*[a-zA-Z0-9])?.)+[a-zA-Z].*$" 
  title="Must be valid URL" />
<p className="validator-hint">Must be valid URL</p>`})]})}),e.jsx("div",{children:e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"date",className:"input validator",required:!0,placeholder:"Pick a date in 2025",min:"2025-01-01",max:"2025-12-31",title:"Must be valid URL"}),e.jsx("p",{className:"validator-hint",children:"Must be 2025"}),e.jsx(t,{jsxCode:`<input type="date" className="input validator" required placeholder="Pick a date in 2025" 
min="2025-01-01" max="2025-12-31"
  title="Must be valid URL" />
<p className="validator-hint">Must be 2025</p>`})]})}),e.jsx("div",{children:e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"number",className:"input validator",required:!0,placeholder:"Type a number between 1 to 10",min:"1",max:"10",title:"Must be between be 1 to 10"}),e.jsx("p",{className:"validator-hint",children:"Must be between be 1 to 10"}),e.jsx(t,{jsxCode:`<input type="number" className="input validator" required placeholder="Type a number between 1 to 10" 
min="1" max="10"
  title="Must be between be 1 to 10" />
<p className="validator-hint">Must be between be 1 to 10</p>`})]})}),e.jsx("div",{children:e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"checkbox",className:"checkbox validator",required:!0,title:"Required"}),e.jsx(t,{jsxCode:'<p className="validator-hint">Required</p>'})]})}),e.jsx("div",{children:e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"checkbox",className:"toggle validator",required:!0,title:"Required"}),e.jsx(t,{jsxCode:'<p className="validator-hint">Required</p>'})]})}),e.jsx("div",{children:e.jsxs("div",{className:"relative",children:[e.jsxs("form",{children:[e.jsxs("select",{className:"select validator",required:!0,children:[e.jsx("option",{disabled:!0,selected:!0,value:"",children:"Choose:"}),e.jsx("option",{children:"Tabs"}),e.jsx("option",{children:"Spaces"})]}),e.jsx("p",{className:"validator-hint",children:"Required"}),e.jsx("button",{className:"btn",type:"submit",children:"Submit form"})]}),e.jsx(t,{jsxCode:`<form>
  <select className="select validator" required>
    <option disabled selected value="">Choose:</option>
    <option>Tabs</option>
    <option>Spaces</option>
  </select>
  <p className="validator-hint">Required</p>
  <button className="btn" type="submit">Submit form</button>
</form>`})]})})]})})});export{l as default};
