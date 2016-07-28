<!DOCTYPE html>
<html>
    <head>
        <title>jQuery Kontrol knop</title>
        <link href="https://opensource.keycdn.com/fontawesome/4.6.3/font-awesome.min.css" rel="stylesheet">
        <!-- 
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
        -->

        <!-- JQuery -->
        <script src="https://code.jquery.com/jquery-3.1.0.js" integrity="sha256-slogkvB1K3VOkzAI8QITxV3VzpOnkeNVsKvtkYLMjfk=" crossorigin="anonymous"></script>

         <script src="jquery.knob.min.js"></script>
        <script src="https://d3js.org/d3.v4.min.js"></script>
        <link rel="stylesheet" type="text/css" href="style.css"/>
    </head>
    
    <body>
        <div id="knopInterface">
            <div id="title"></div>
            <div style="display: flex;">
                <button class="flat-button" id="left"><i class="fa fa-chevron-left fa-2x"  aria-hidden="true"></i></button>

                <input type="text" value="75" class="dial">

                <button class="flat-button" id="right"><i class="fa fa-chevron-right fa-2x"  aria-hidden="true"></i></button>
            </div>
        </div>

        <script src="knop.js"></script>
    </body>
</html>