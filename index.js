/*   
   @@@@@@   @@   @      @  @@@@@@@   @@   @@  @@@@@@@@     
   @@       @@   @@    @@  @@        @@   @@     @@     
   @@@@     @@    @@  @@   @@ @@@@@  @@@@@@@     @@        
   @@       @@      @@     @@    @@  @@   @@     @@        
   @@       @@@@@@  @@     @@@@@@@   @@   @@     @@  
   
      
     @@      @@@@@      @@    @@@@@    @@@@@@   @    @    @    @
   @@ @@    @@        @@ @@   @@   @@  @@      @@@  @@@   @@  @@           
  @@@@@@@  @@        @@@@@@@  @@    @@ @@@@    @@ @@ @@    @@@@
  @@   @@   @@       @@   @@  @@  @@   @@      @@    @@     @@
  @@   @@    @@@@@   @@   @@  @@@@@    @@@@@@  @@    @@     @@      
  
  
                                                                      
                                            ,@@@                      
                @@@                     @@@@@@,                      
        @@@@@@@@@@@      @@@@         @@@@@@@@                        
         @@@@@@@@@@@@@@@@@@@@@@@@@@ @@@@@@@                           
                @@@@@@@@@@@@@@@@@@@@@@@@@                             
                      @@@@@@@@@@@@@@@@@@                              
                          @@@@@@@@@@@@@@                              
                          @@@@@@@@@@@@@@@                             
                         @@@@@@@@@@@@@@@@@@@                          
                      @@@@@       @@@@@@@                             
                   /@@@@.          @@@@@@@                            
       @@@@@@@@@@@@@@@              @@@@@@(@@&                        
          @@@@@@@@@@                 @@@@@@@                          
             %@@@@@@                  @@@@@                           
                @@@@@                  @@@@                           
                 @@@@                   @@@                           
                 
*/


const server = require('./src/setting/app.js');
const { conn, Users } = require('./src/setting/db.js');
require("dotenv").config();

const createDB = async () => {
  //create admin user for testing
  await Users.findOrCreate({
    where:{ email: "admin@email.com" },
    defaults: { name: "adminTest",
                lastName: "adminLastname",
                birthday: "2000-01-01",
                pass: "admin",
             // gender: "Other",
                rol: "Admin",
             // address: "Av Libertador",
             // cp: "CP1430",
             // telephone: 11547894 }
    }
  });
}

// Syncing all the models at once.

conn.sync({ force: false }).then(() => {
  server.listen(process.env.PORT || 3001, async () => {
    console.log("Espere a que se cree la base de datos..");
    console.time("Se creo la base de datos con exito");
    try {
      await createDB();
      console.timeEnd("Se creo la base de datos con exito");
      console.log("%s listening at 3001");
    } catch (error) {
      console.log(error, "No se pudo crear la base de datos ");
    }
  });
});
