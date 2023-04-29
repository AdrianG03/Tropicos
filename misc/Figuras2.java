
package graficacion;

import java.awt.Color;
import javax.swing.JFrame;

public class Figuras2 {

public static void main(String[] args){
    JFrame marco = new JFrame ("Dibujo de figuras en 2D");
    marco.setDefaultCloseOperation( JFrame.EXIT_ON_CLOSE);

    Figuras2JPanel figuras2JPanel = new Figuras2JPanel ();
    marco.add( figuras2JPanel ); // agrega figuras2JPanel al marco
    marco.setBackground (Color.white ); // establece color de fondo del marco
    marco.setSize ( 400, 400 ); // establece el tamaño del marco
    marco.setVisible( true ); // muestra el marco
        
    }// fin de main
    
}// 
 