// Regis
{
    const form1 = document.getElementById('form1');
    const email = document.getElementById('email');
    const pwd = document.getElementById('pwd');

    if(form1) {
        form1.addEventListener('submit', (e) =>  {
            e.preventDefault();
    
            checkInputs1();
        });

        email.onblur = function(){
            const emailValue = email.value.trim();
            if(emailValue === ''){
            // show error
            // add class error
            setErrorFor(email, 'Email tidak boleh kosong');
            } else if (!isEmail(emailValue)) {
                setErrorFor(email, 'Email anda tidak valid')
            }
            else{
                //add class success
                setSuccessFor(email);
            }
        }
        pwd.onblur = function(){
            const pwdValue = pwd.value.trim();
            
            if(pwdValue === ''){
                // show error
                // add class error
                setErrorFor(pwd, 'Password tidak boleh kosong');
            } else if (pwdValue.length <= 7){
                setErrorFor(pwd, 'Password tidak boleh kurang dari 8 karakter');
            }
            else{
                //add class success
                setSuccessFor(pwd);
            }
        }
    }

    function checkInputs1(){
        if(email.value !== '' && isEmail(email.value) && pwd.value !== '' && pwd.value.length >= 7 ) {
            window.location.href = 'regist2.html';
        }else{ 
            alert('* Form Harus diisi dengan benar!')
        }
    }

    function setErrorFor(input, message){
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');

        //add error message inside small
        small.innerText = message;

        //add error class
        formControl.className = 'form-control error';
    }

    function setSuccessFor(input){
        const formControl = input.parentElement;
        formControl.className = 'form-control success'
    }

    function isEmail(email){
        return /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email);
    }
} // end regis

{
    const form2 = document.getElementById('form2')
    const nama = document.getElementById('name');
    const compName = document.getElementById('compName');
    const industry = document.getElementById('industry');
    const role = document.getElementById('role');


    form2.addEventListener('submit', (e) => {
        e.preventDefault();
        
        checkInputs2();
    })

    function checkInputs2(){
        if(nama.value !== '' && compName.value !== '' && industry.value !== 'ind-0' && role.value !== 'role-0' ){
            window.location.href = 'login.html'
        }
        else{
            alert('* Form harus diisi dengan benar!')
        }
    }

    nama.onblur = function(){
        const namaValue = nama.value.trim();
        if(namaValue === ''){
        // show error
        // add class error
            setErrorFor(nama, 'Nama tidak boleh kosong');
        } 
        else{
            //add class success
            setSuccessFor(nama);
        }
    }

    compName.onblur = function(){
        const compNameValue = compName.value.trim();
        if(compNameValue === ''){
            // show error
            // add class error
            setErrorFor(compName, 'Company Name tidak boleh kosong');
        }
        else{
            //add class success
            setSuccessFor(compName);
        }
    }

    industry.onblur = function(){
        const industryValue = industry.value.trim();
        if(industryValue === 'ind-0'){
            // show error
            // add class error
            setErrorFor(industry, 'Industry belum dipilih');
        }
        else{
            //add class success
            setSuccessFor(industry);
        }
    }

    role.onblur = function(){
        const roleValue = role.value.trim();
        if(roleValue === 'role-0'){
            // show error
            // add class error
            setErrorFor(role, 'Role belum dipilih');
        }
        else{
            //add class success
            setSuccessFor(role);
        }
    }

    function setErrorFor(input, message){
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');

        //add error message inside small
        small.innerText = message;

        //add error class
        formControl.className = 'form-control error';
    }

    function setSuccessFor(input){
        const formControl = input.parentElement;
        formControl.className = 'form-control success'
    }

    function isEmail(email){
        return /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email);
    }
}







