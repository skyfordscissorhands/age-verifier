function show_confirm()

{

var r=confirm('You ordered food.');
// displays the message in a pop-up                                                                                                                                            window

    if (r==true)                
    // on pop-up window is you select ok you
 { window.open('3b.html', 'popup', 'width=300,height=400');   
 // are linked to secondary local page 

}else                        
// if you select cancel

          {window.open('3a.html', 'popup','width=300,height=400' );   
          // this message is displayed 
        }
}
//<![CDATA[
    window.onload = setupScripts;
    function setupScripts()
    {
        var anOrder1 = new OrderForm();
    }
    //]]>