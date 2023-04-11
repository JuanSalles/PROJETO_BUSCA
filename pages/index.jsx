
export default function Homepage(){
    return (
        <body>
            < Header />

            <main>
                <section>
                    <Conteudo/>
                </section>
            </main>
        </body>
    

    );
}
function Header(){
    return(
        <header>
            <input type="text" class="pesquisa"/>
        </header>
    )
}


function ThumbVideo(){
    return(
        <>
            <div class="thumbnail" id="thumb1">
                <h1>video-1</h1>
            </div>
            <div class="thumbnail" id="thumb2">
                <h1>video-2</h1>
            </div>
            <div class="thumbnail" id="thumb3">
                <h1>video-3</h1>
            </div>
            <div class="thumbnail" id="thumb4">
                <h1>video-4</h1>
            </div>
            <div class="thumbnail" id="thumb5">
                <h1>video-5</h1>
            </div>
            <div class="thumbnail" id="thumb6">
                <h1>video-6</h1>
            </div>
        </>
    )
}


function Conteudo(){
    return(
        <div class="conteudo">
            < ThumbVideo/>
        </div>  
    )
}
