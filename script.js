let pass = document.getElementsByTagName('input');
    
for (let i = 0; i < Object.keys(pass).length; i++) {
    if(pass[i].type=='password'){
        pass[i].type='text';
    }
}

