<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web-shop mobiteli</title>
    <!-- link rel="stylesheet" href="../css/stil.css" -->
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"> 

</head>

<body>
    <div class="w3-container">
        <nav>
            <div class="w3-bar w3-black">
                <a href="index.html" class="w3-bar-item w3-button">Početna stranica</a>
                <!-- a href="" class="w3-bar-item w3-button">Sve ponude</a -->
                <a href="kontakt.html" class="w3-bar-item w3-button">Kontakt</a>
                <a href="registracija.html" class="w3-bar-item w3-button">Registracija</a>
            </div>          
        </nav>
    </div>
    <div class="w3-container">
    <h1>Web shop - mobiteli</h1>    
    <p></p>
    <?php
            $server = "localhost";
            $database ="pzi";
            $username="root";
            $password ="";
            $conn = mysqli_connect($server,$username,$password,$database);
            $query = "SELECT * FROM mobiteli";
            $res = mysqli_query($conn, $query);




        ?>
    <div>Popis svih mobitela:
        <table class="w3-table-all">
            <tr class="w3-red">
                <th></th>
                <th>Naziv uređaja</th>
                <th>Proizvođač</th>
                <th>Opis</th>
                <th>Slika</th>
                <th>Cijena</th>
            </tr>
    <?php
while($row = mysqli_fetch_array($res)){
                echo" <tr>";
              echo  "<td>".$row['id']."</td>";
              echo "<td>".$row['naziv']."</td>";
                echo"<td>".$row['proizvodac']."</td>";
                echo"<td>".$row['opis']."</td>";
                echo"<td><img src='".$row['slika']."'width='100px' alt='".$row['naziv']."'</td>";
                echo"<td>".$row['cijena']."</td>";
                echo"</tr>";}
mysqli_close($conn);
    ?>


            
           
            <tr>
                <td>3.</td>
                <td>XIAOMI 12 PRO</td>
                <td>Xiaomi</td>
                <td>
                    Dimenzije:	163.60 x 74.60 x 8.16 mm <br>
                    Procesor:	Qualcomm Snapdragon 8 Gen 1 <br>
                    Glavna kamera:	50MP, IMX707, f/1.9, 8K recording <br>
                    Prednja kamera:	32MP, HDR 10+ recording <br>     
                    <a 
                        href="" 
                        target="_blank">Više o uređaju...
                    </a>
                </td>
                <td>
                    <img src="../images/xiamo13.png" 
                    width="100px" alt="Galaxy S23 Ultra"></td>
                <td>611.45</td>
            </tr>

            <tr>
                <td>4.</td>
                <td>Xiaomi 13T Pro Alpine Blue 512GB</td>
                <td>Xiaomi</td>
                <td>
                    OS: Android 13
                    <br>
                    Dimenzije: 162.2 x 75,7 x 8.62
                    <br>
                    Težina: 206 g
                    <br>
                    Zaslon: 6,67" AMOLED 1220 x 2712
                    <br>
                    Memorija (RAM/ROM): RAM: 12GB ROM: 512 GB
                    <br>
                    <a href="https://mi.hr/xiaomi-13t-pro" target="_blank">Više o uređaju...</a></td>
                <td><img src="../images/xiamo13.png" width="100px" alt="Xiaomi 13T Pro Alpine Blue"></td>
                <td>611.45</td>
            </tr>
            <tr>
                <td>5.</td>
                <td>Redmi Note 12 5G</td>
                <td>Xiaomi</td>
                <td>
                    Dimenzije: 165.88mm x 76.21mm x 7.98mm <br>
                    Procesor: Qualcomm Snapdragon 4 Gen 1 (6 nm) <br>
                    Octa-core CPU, do 2.0GHz <br>
                    Grafika: Qualcomm Adreno™ 619 <br>
                    OS: MIUI 14, based on Android 12  <br>    
                    Ekran: 6.67“ FHD+ AMOLED Display Corning® Gorilla® Glass 3 <br>
                    <a href="https://mi.hr/redmi-note-12-5g" target="_blank">Više o uređaju...</a> </td>
                <td><img src="../images/redmi.webp" width="100px" alt=""></td>
                <td>287.63</td>              
            </tr>
            <tr>
                <td>6.</td>
                <td> iPhone 15 Pro </td>
                <td>Apple</td>
                <td>
                    Boja: Crni titanij, bijeli titanij, plavi titanij, prirodni titanij <br>
                    Kapacitet: 128 GB - 1 TB <br>
                    Zaslon: Super Retina XDR 6,1-inčni (dijagonalno) OLED zaslon od ruba do ruba <br>
                    Rezolucija: 2556 x 1179 piksela uz 460 ppi <br>
                    <a 
                        href="https://www.apple.com/hr/iphone-15-pro/" 
                        target="_blank">Više o uređaju...
                    </a>
                </td>
                <td>
                    <img 
                        src="../images/iphone15pro.jpg" 
                        width="100px" 
                        alt=""></td>
                <td>180</td>
            </tr>
        </table>
        
    </div>
    </div>
</body>
</html>