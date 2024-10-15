# redux

The project was implemented using the react.
Technology stack: react-router-dom, redux, RTK, tailwind css.

The application markup is located in the file src\app\root.jsx .
The application displays student cards. Each card provides the ability to edit and delete data.

The application uses two slices: 
	* "specialties" slice (src\app\parts\speciality\specialitySlice.js); 
 
 	* "students" slice (src\app\parts\students\studentSlice.js).
  
Structure of the specialty slice: 
	* initialState – initial state;
 
	* name: 'specialty' – slice name.

Structure of the students slice:
    * initialState – initial state;
	 
    * name: 'students' – slice name
	 
    * studentAdded – data adding reducer function. studentAdded first prepares data for adding using the prepare method, where the following props are passed:
                    name, surname, specialty, age, yearOfAdmission;
						  
    * studentUpdated – update reducer function;
	 
    * studentDelete – delete reducer function.

Additional function used in this app:
    SelectSpeciality (src\app\parts\speciality\SelectSpeciality\SelectSpeciality.jsx) – returns "specialty" by id number. 
