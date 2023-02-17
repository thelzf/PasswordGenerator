var mode;
var context;

function showfilter(x)
{
    if(x == 1)
    {
        $("#filter").show();
        context = true;
    }
    else if(x == 0)
    {
        $("#filter").hide();
        context = false;
    }
}

$("#mode").click(function()
{
    mode = $("#mode option:selected").val();

    if(mode == '1')
    {
        showfilter(0);
    }
    else
    {
        showfilter(1);

    }
});

function generateLetters(num)
{
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        var letters = '';
        const charactersLength = characters.length;
        for ( let i = 0; i < num; i++ )
        {
            letters += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return letters;
}

function generatenumbers(num)
{
    var characters = '1234567890'
        var numbers = '';
        const charactersLength = characters.length;
        for ( let i = 0; i < num; i++ )
        {
            numbers += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return numbers;
}

function generatenumbersfunction(num)
{
    var characters = '3456789'
        var numbers = '';
        const charactersLength = characters.length;
        for ( let i = 0; i < num; i++ )
        {
            numbers += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return numbers;
}

function generatespecialchars(num)
{
    var characters = '_@#';
        var specialchars = '';
        const charactersLength = characters.length;
        for ( let i = 0; i < num; i++ )
        {
            specialchars += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return specialchars;
}


function verifymode()
{
    dificult = $("#dificultmode option:selected").val();

    if(dificult == 1)
    {
        return 1;
    }
    else if(dificult == 2)
    {
        return 2;
    }

}

$("#copy").click(function()
{


    var copy = $("#password-code").val();
    navigator.clipboard.writeText(copy);

    $("#copy").hide();
    $("#copied").show();
});

function generatePass()
{
    if(context == true)
    {

        var numbers;
        var letters;
        var especialchars;
        var especialchars2;
        var randomElement1;
        var randomElement2;
        var randomElement3;

        var name = $("#yname").val();
        var birth = $("#ydate").val();
        var city = $("#ycity").val();

        var factoryname = name.split(' ');
        var factorybirth = birth.split('-');
        var factorycity = city.split(' ');

        var totalfactorys = factoryname.concat(factorybirth).concat(factorycity);



        // easy mode
        if(verifymode() == 1)
        {
            numbers = generatenumbers(4);
            randomElement1 = totalfactorys[Math.floor(Math.random() * totalfactorys.length)];
            password = randomElement1 + numbers;
        }

        // advanced mode
        else if(verifymode() == 2)
        {
            var thisnumber = parseInt(generatenumbersfunction(1));
            // var thisnumberl = parseInt(generatenumbersfunction(1));
            var thisnumberspecial = parseInt(generatenumbersfunction(1));
            var thisnumberspecial2 = parseInt(generatenumbersfunction(1));
            // letters = generateLetters(thisnumberl);
            numbers = generatenumbers(thisnumber);
            especialchars = generatespecialchars(thisnumberspecial);
            especialchars2 = generatespecialchars(thisnumberspecial2);
            randomElement1 = totalfactorys[Math.floor(Math.random() * totalfactorys.length)];
            randomElement2 = totalfactorys[Math.floor(Math.random() * totalfactorys.length)];
            password =  randomElement1 + numbers + especialchars + randomElement2 + especialchars;
        }

        $("#password-code").val(password);

    }
    else
    {
        var password;
        var letters;
        var numbers;
        var especialchars;
        var countpass;
        var x;

        // easy mode
        if(verifymode() == 1)
        {
            letters = generateLetters(6);
            numbers = generatenumbers(4);
            password = letters + numbers;
        }

        // advanced mode
        else if(verifymode() == 2)
        {
            var thisnumber = parseInt(generatenumbersfunction(1));
            var thisnumberl = parseInt(generatenumbersfunction(1));
            var thisnumberspecial = parseInt(generatenumbersfunction(1));
            letters = generateLetters(thisnumberl);
            numbers = generatenumbers(thisnumber);
            especialchars = generatespecialchars(thisnumberspecial);
            password = letters + numbers + especialchars;
        }

        countpass = parseInt(password.length);

        var arraypass = [];

        for(x = 0; x<countpass;x++)
        {
            y = x - 1;
            arraypass[x] = password.slice(y,x);
        }

        $("#password-code").val(password);

    }
}

$("#generate-code").click(function()
{

    $("#copied").hide();
    $("#copy").show();

    generatePass();



});

$( document ).ready(function() {

    showfilter(0);
    $("#copied").hide();

});