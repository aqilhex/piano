  const sounds = {
    'C1':typeof Audio!=="undefined" ? new Audio("./sounds/C1.mp3") : undefined,
    'D1':typeof Audio!=="undefined" ? new Audio("./sounds/D1.mp3") : undefined,
    'E1':typeof Audio!=="undefined" ? new Audio("./sounds/E1.mp3") : undefined,
    'F1':typeof Audio!=="undefined" ? new Audio("./sounds/F1.mp3") : undefined,
    'G1':typeof Audio!=="undefined" ? new Audio("./sounds/G1.mp3") : undefined,
    'A1':typeof Audio!=="undefined" ? new Audio("./sounds/A1.mp3") : undefined,
    'B1':typeof Audio!=="undefined" ? new Audio("./sounds/B1.mp3") : undefined,
    'C2':typeof Audio!=="undefined" ? new Audio("./sounds/C2.mp3") : undefined,
    'D2':typeof Audio!=="undefined" ? new Audio("./sounds/D2.mp3") : undefined,
    'E2':typeof Audio!=="undefined" ? new Audio("./sounds/E2.mp3") : undefined,
    'F2':typeof Audio!=="undefined" ? new Audio("./sounds/F2.mp3") : undefined,
    'G2':typeof Audio!=="undefined" ? new Audio("./sounds/G2.mp3") : undefined,
    'A2':typeof Audio!=="undefined" ? new Audio("./sounds/A2.mp3") : undefined,
    'B2':typeof Audio!=="undefined" ? new Audio("./sounds/B2.mp3") : undefined,
    'C3':typeof Audio!=="undefined" ? new Audio("./sounds/C3.mp3") : undefined,
    'D3':typeof Audio!=="undefined" ? new Audio("./sounds/D3.mp3") : undefined,
    'E3':typeof Audio!=="undefined" ? new Audio("./sounds/E3.mp3") : undefined,
    'F3':typeof Audio!=="undefined" ? new Audio("./sounds/F3.mp3") : undefined,
    'G3':typeof Audio!=="undefined" ? new Audio("./sounds/G3.mp3") : undefined,
    'A3':typeof Audio!=="undefined" ? new Audio("./sounds/A3.mp3") : undefined,
    'B3':typeof Audio!=="undefined" ? new Audio("./sounds/B3.mp3") : undefined,
    'C4':typeof Audio!=="undefined" ? new Audio("./sounds/C4.mp3") : undefined,
    'D4':typeof Audio!=="undefined" ? new Audio("./sounds/D4.mp3") : undefined,
    'E4':typeof Audio!=="undefined" ? new Audio("./sounds/E4.mp3") : undefined,
    'F4':typeof Audio!=="undefined" ? new Audio("./sounds/F4.mp3") : undefined,
    'G4':typeof Audio!=="undefined" ? new Audio("./sounds/G4.mp3") : undefined,
    'A4':typeof Audio!=="undefined" ? new Audio("./sounds/A4.mp3") : undefined,
    'B4':typeof Audio!=="undefined" ? new Audio("./sounds/B4.mp3") : undefined,
    'C5':typeof Audio!=="undefined" ? new Audio("./sounds/C5.mp3") : undefined,
    'D5':typeof Audio!=="undefined" ? new Audio("./sounds/D5.mp3") : undefined,
    'E5':typeof Audio!=="undefined" ? new Audio("./sounds/E5.mp3") : undefined,
    'F5':typeof Audio!=="undefined" ? new Audio("./sounds/F5.mp3") : undefined,
    'G5':typeof Audio!=="undefined" ? new Audio("./sounds/G5.mp3") : undefined,
    'A5':typeof Audio!=="undefined" ? new Audio("./sounds/A5.mp3") : undefined,
    'B5':typeof Audio!=="undefined" ? new Audio("./sounds/B5.mp3") : undefined,
    'C6':typeof Audio!=="undefined" ? new Audio("./sounds/C6.mp3") : undefined,
    'D6':typeof Audio!=="undefined" ? new Audio("./sounds/D6.mp3") : undefined,
    'E6':typeof Audio!=="undefined" ? new Audio("./sounds/E6.mp3") : undefined,
    'F6':typeof Audio!=="undefined" ? new Audio("./sounds/F6.mp3") : undefined,
    'G6':typeof Audio!=="undefined" ? new Audio("./sounds/G6.mp3") : undefined,
    'A6':typeof Audio!=="undefined" ? new Audio("./sounds/A6.mp3") : undefined,
    'B6':typeof Audio!=="undefined" ? new Audio("./sounds/B6.mp3") : undefined,
    'C7':typeof Audio!=="undefined" ? new Audio("./sounds/C7.mp3") : undefined,
    'D7':typeof Audio!=="undefined" ? new Audio("./sounds/D7.mp3") : undefined,
    'E7':typeof Audio!=="undefined" ? new Audio("./sounds/E7.mp3") : undefined,
    'F7':typeof Audio!=="undefined" ? new Audio("./sounds/F7.mp3") : undefined,
    'G7':typeof Audio!=="undefined" ? new Audio("./sounds/G7.mp3") : undefined,
    'A7':typeof Audio!=="undefined" ? new Audio("./sounds/A7.mp3") : undefined,
    'B7':typeof Audio!=="undefined" ? new Audio("./sounds/B7.mp3") : undefined,
   
    'DB1':typeof Audio!=="undefined" ? new Audio("./sounds/DB1.mp3") : undefined,
    'EB1':typeof Audio!=="undefined" ? new Audio("./sounds/EB1.mp3") : undefined,
    'GB1':typeof Audio!=="undefined" ? new Audio("./sounds/GB1.mp3") : undefined,
    'AB1':typeof Audio!=="undefined" ? new Audio("./sounds/AB1.mp3") : undefined,
    'BB1':typeof Audio!=="undefined" ? new Audio("./sounds/BB1.mp3") : undefined,
    
    'DB2':typeof Audio!=="undefined" ? new Audio("./sounds/DB2.mp3") : undefined,
    'EB2':typeof Audio!=="undefined" ? new Audio("./sounds/EB2.mp3") : undefined,
    'GB2':typeof Audio!=="undefined" ? new Audio("./sounds/GB2.mp3") : undefined,
    'AB2':typeof Audio!=="undefined" ? new Audio("./sounds/AB2.mp3") : undefined,
    'BB2':typeof Audio!=="undefined" ? new Audio("./sounds/BB2.mp3") : undefined,
    
    'DB3':typeof Audio!=="undefined" ? new Audio("./sounds/DB3.mp3") : undefined,
    'EB3':typeof Audio!=="undefined" ? new Audio("./sounds/EB3.mp3") : undefined,
    'GB3':typeof Audio!=="undefined" ? new Audio("./sounds/GB3.mp3") : undefined,
    'AB3':typeof Audio!=="undefined" ? new Audio("./sounds/AB3.mp3") : undefined,
    'BB3':typeof Audio!=="undefined" ? new Audio("./sounds/BB3.mp3") : undefined,
    
    'DB4':typeof Audio!=="undefined" ? new Audio("./sounds/DB4.mp3") : undefined,
    'EB4':typeof Audio!=="undefined" ? new Audio("./sounds/EB4.mp3") : undefined,
    'GB4':typeof Audio!=="undefined" ? new Audio("./sounds/GB4.mp3") : undefined,
    'AB4':typeof Audio!=="undefined" ? new Audio("./sounds/AB4.mp3") : undefined,
    'BB4':typeof Audio!=="undefined" ? new Audio("./sounds/BB4.mp3") : undefined,
   
    'DB5':typeof Audio!=="undefined" ? new Audio("./sounds/DB5.mp3") : undefined,
    'EB5':typeof Audio!=="undefined" ? new Audio("./sounds/EB5.mp3") : undefined,
    'GB5':typeof Audio!=="undefined" ? new Audio("./sounds/GB5.mp3") : undefined,
    'AB5':typeof Audio!=="undefined" ? new Audio("./sounds/AB5.mp3") : undefined,
    'BB5':typeof Audio!=="undefined" ? new Audio("./sounds/BB5.mp3") : undefined,
   
    'DB6':typeof Audio!=="undefined" ? new Audio("./sounds/DB6.mp3") : undefined,
    'EB6':typeof Audio!=="undefined" ? new Audio("./sounds/EB6.mp3") : undefined,
    'GB6':typeof Audio!=="undefined" ? new Audio("./sounds/GB6.mp3") : undefined,
    'AB6':typeof Audio!=="undefined" ? new Audio("./sounds/AB6.mp3") : undefined,
    'BB6':typeof Audio!=="undefined" ? new Audio("./sounds/BB6.mp3") : undefined,
   
    'DB7':typeof Audio!=="undefined" ? new Audio("./sounds/DB7.mp3") : undefined,
    'EB7':typeof Audio!=="undefined" ? new Audio("./sounds/EB7.mp3") : undefined,
    'GB7':typeof Audio!=="undefined" ? new Audio("./sounds/GB7.mp3") : undefined,
    'AB7':typeof Audio!=="undefined" ? new Audio("./sounds/AB7.mp3") : undefined,
    'BB7':typeof Audio!=="undefined" ? new Audio("./sounds/BB7.mp3") : undefined,
  }

  export default sounds;