import styles from "./AboutPage.module.css";
import { useNavigate } from "react-router-dom";
import {useEffect, useState } from "react";
import * as data from '../../api/data';


function AboutPage() {


  return (
    <main className={styles.aboutpageMain}>
      <div>
      {/* https://drive.google.com/file/d/1clJJEKfkuiNybSZkoOTWteoRf4Gjb8-w/view?usp=drive_link */}
          <img src="https://drive.google.com/thumbnail?id=1clJJEKfkuiNybSZkoOTWteoRf4Gjb8-w&sz=w1000" alt="test"/>
          <p>Born on 18.07.1944, Pernik, Bulgaria.</p>
      </div>

      <article className={styles.articleAbout}>
        <p>Member of the Union of Bulgarian Artists. He has been participating in group exhibition since 1967. He realized over 20 single exhibitions in the period 1971 until today.</p>

        <p>He took part in over 15 international pleinairs.</p>
        <p>His paintings are possession of The National Art gallery, other galleries in Bulgaria and private collections in Austria, Belgium, Greece, USA, Germany, Serbia and Montenegro, Cyprus, Switzerland, Poland, France, South Korea.</p>


        <p>I am an artist based in Bulgaria and over the years of my creative experience I have followed a long path – a winding exploration of abstract art and its borders. Sometimes I imagine that all my artworks are landscapes, though emotional landscapes, which I visualize as a long, almost geological evolution of emotional processes. Sometimes the picture would present a peaceful sea embracing the endless depth of the clear sky of a calm mind, sometimes it would present an eruption of the forces born deep into the depths of the human soul. But more often than not, these worlds unveil slowly, as the contact with them becomes more and more intimate. While painting these emotional landscapes, I neither try to expose „the true nature“ of emotions, nor to present them beautifully - my struggle is to present them just as they happened to be in a particular moment.</p>

        <h3>SOLO EXHIBITIONS</h3>

        <ul>
            <li>2020 – The Union of Bulgarian Artists (UBA) – Raiko Alexiev Gallery</li>
            <li>2016 – The Union of Bulgarian Artists (UBA) - Shipka 6 Gallery, Sofia, Bulgaria</li>
            <li>2011 – Ikar Gallery, Sofia, Bulgaria</li>
            <li>2010 – LIK Gallery, Sofia, Bulgaria</li>
            <li>2009 – ActiveArt Gallery, Varna, Bulgaria</li>
            <li>2009 – Sezoni Gallery, Sofia, Bulgaria</li>
            <li>2008 – LIK Gallery, Sofia, Bulgaria</li>
            <li>2007 – V. Dimitrov-Majstora Gallery, Kyustendil, Bulgaria</li>
            <li>2007 – Ikar Gallery, Sofia, Bulgaria</li>
            <li>2006 – Paris Gallery , Sofia, Bulgaria</li>
            <li>2005 – Lyuben Gajdarov Gallery, Pernik, Bulgaria</li>
            <li>2004 – Shipka 6 Gallery, Sofia, Bulgaria</li>
            <li>1995 – Town Gallery, Pernik, Bulgaria</li>
            <li>1993 – Palace Gallery, Varna, Bulgaria</li>
            <li>1993 – Shipka 6 Gallery, Sofia, Bulgaria</li>
            <li>1993 – Interfolk Gallery, Pernik, Bulgaria</li>
            <li>1989 – Madan, Bulgaria</li>
            <li>1987 – Ruski 6, Gallery, Pernik, Bulgaria</li>
            <li>1985 – Breznik, Bulgaria</li>
            <li>1985 – Pernik, Bulgaria</li>
            <li>1983 – Town Gallery, Pernik, Bulgaria</li>
            <li>1979 – Radomir, Bulgaria</li>
            <li>1979 – Pernik, Bulgaria</li>
            <li>1977 – Rakovska 108 Gallery, Sofia, Bulgaria</li>
            <li>1971 – KKD Gallery, Pernik, Bulgaria</li>
        </ul>

        <h3>INTERNATIONAL GROUP EXIBITIONS</h3>

        <ul>
            <li>2009 – Beograd, Serbia</li>
            <li>2009 – Podgorica, Montenegro</li>
            <li>2008 – Sarajevo, Bosnia and Herzegovina</li>
            <li>2001 – Skopje, Macedonia – CIC Gallery</li>
            <li>2000 – Kralevo, Former Yugoslavia – Town Gallery</li>
            <li>1995 – Chicago, USA – Nellie Gallery</li>
            <li>1994 – Oslo, Norway – Royal National Theatre</li>
            <li>1994 – Washington, USA – W – 34 Gallery</li>
            <li>1993 – Strasbourg, France – Representative exhibition of the Bulgarian art in the European Parliament</li>
            <li>1993 – Paris, France – Milovanovich Gallery</li>
            <li>1991 – Vienna, Austria – Bulgarian Cultural Institute – Wittgenstein Gallery</li>
            <li>1980 – Chestohovo, Poland – BVA Gallery</li>
            <li>1978 – Tbilisi, Georgia</li>
            <li>1976 – Moscow, Painter's House</li>
         </ul>

         <h3>RECENT GROUP EXHIBITIONS</h3>

         <ul>
            <li>2019 – National exhibition “Ludogorie”, Razgrad, Bulgaria</li>
            <li>2018 – National Competition of Allianz Bulgaria for Painting, Sculpture and Graphics, Sofia, Bulgaria. Award Nominee.</li>
            <li>2018 – Biennial for Contemporary Fine Arts “Friends of the Sea”, Bourgas, Bulgaria</li>
            <li>2018 – Regional Competition “Struma 2018”, Kyustendil, Bulgaria. Winner of the Grand Award of UBA (Union of Bulgarian Artists)</li>
            <li>2017 – National exhibition “Ludogorie”, Razgrad, Bulgaria</li>
            <li>2016 – Quadrennial for Painting from the Balkan Countries “Myths and Legends”, Stara Zagora, Bulgaria</li>
            <li>2016 – Biennial for Contemporary Fine Arts “Friends of the Sea”, Bourgas, Bulgaria</li>
            <li>2016 – National Competition of Allianz Bulgaria for Painting, Sculpture and Graphics, Sofia, Bulgaria</li>
            <li>2015 – Biennial Art of Miniature, Rousse, Bulgaria</li>
            <li>2014 – Cité Internationale des Arts, exhibition</li>
            <li>2014 – Cité Internationale des Arts, residency</li>
            <li>2014 – Seventh National Biennale for Small Events, Pleven, Bulgaria – First award for painting</li>
            <li>2014 – Biennale of Contemporary Bulgarian Fine Arts, Bourgas, Bulgaria</li>
            <li>2014 – National exhibition “Now/Then”, Sofia, Bulgaria</li>
            <li>2014 – National competition Allianz Bulgaria for painting, sculpture and graphics, Sofia, Bulgaria - nomination</li>
            <li>2013 – National exhibition “Ludogorie”, Razgrad, Bulgaria</li>
            <li>2012 – Quadrinnale of Balkan Fine Art "Myths and Legends of my People", Stara Zagora, Bulgaria</li>
            <li>2012 – National competition Allianz Bulgaria for painting, sculpture and graphics, Sofia, Bulgaria</li>
            <li>2012 – Biennale of Contemporary Bulgarian Fine Arts, Bourgas, Bulgaria</li>
            <li>2012 – Sixth National Biennale for Small Events, Pleven, Bulgaria</li>
            <li>2011 – National exhibition “Landscape”, Vidin, Bulgaria</li>
            <li>2010 – Biennale of Contemporary Bulgarian Fine Arts, Bourgas, Bulgaria</li>
            <li>2010 – Fifth National Biennale for Small Events, Pleven, Bulgaria</li>
            <li>2010 – National competition Allianz Bulgaria for painting, sculpture and graphics, Sofia, Bulgaria</li>
            <li>2009 – National exhibition “Born Independent”, Sofia, Bulgaria</li>
            <li>2008 – National competition Allianz Bulgaria for painting, sculpture and graphics, Sofia, Bulgaria</li>
            <li>2008 – Biennale of Contemporary Bulgarian Fine Arts, Bourgas, Bulgaria</li>
            <li>2008 – Third National Biennale for Small Events. Pleven</li>
            <li>2006 – Biennale of Contemporary Bulgarian Fine Arts, Bourgas, Bulgaria</li>
            <li>2006 – Third National Biennale for Small Events. Pleven</li>
            <li>2006 – Exhibition “The Body” of the Painting Department of the Union of Bulgarian Artists</li>
            <li>2006 – National exhibition “ The Land of Botev” – Vratsa, Bulgaria</li>
            <li>2005 – Exhibition “ Personal Mythology” of the Painting Department of the Union of Bulgarian Artists</li>
            <li>2004 – Balkan Quadrienale of Fine Arts “ Myths and Legends of my People” – Stara Zagora</li>
            <li>2004 – Second national Biennale for Small Events – Pleven</li>
            <li>2002 – First National Biennale for Small Events – Pleven</li>
        </ul>
        



      </article>
    </main>

  )

}

export default AboutPage;
