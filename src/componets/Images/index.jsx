import './style.css'

function Images(){
    return(
        <section>
          <h2>Imagem e vídeo</h2>
          <h3>Imagem</h3>
          <img src="https://pbs.twimg.com/profile_images/1613553278029012994/9BlkFbe1_400x400.jpg" alt="Rony Rústico careca" width="600" height="200"  />
            <h3>Vídeo</h3>
            <iframe width="400" height="300" src="https://www.youtube.com/embed/q9opdd_uS8g?si=UGXNKY5wxw-CZGKp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </section>
    )
}

export default Images