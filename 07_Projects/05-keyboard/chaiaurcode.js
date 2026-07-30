window.addEventListener('keydown',(e)=>{
    insertt.innerHTML = `
    <table class = 'color'>
       <tr>
         <th>Key</th>
         <th>KeyCode</th>  
         <th>Key</th>  
       </tr>
       <tr>
          <td>${e.key ===" " ? "Space" : e.key}</td>
          <td>${e.keyCode}</td>
          <td>${e.code}</td>
       </tr>
       </table>
     
    `
});