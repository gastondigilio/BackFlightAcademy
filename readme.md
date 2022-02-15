# *Flight Academy (Back-End)*
_Flight Academy is a software development project designed to support flights_

## *DEV Tools*: 

### _Routes:_

• Users

localhost:XXXX/users/all (GET)
BODY: { token, password, }

localhost:XXXX/users/signup (POST)
BODY: { name, lastName, email, password }

localhost:XXXX/users/veryficated (GET)
BODY: { email }

localhost:XXXX/users/signin (GET)
BODY: { email, password }

localhost:XXXX/users/update (PATCH)
BODY: { token, password_(if the profile belongs to the user)_, name, lastName, document, birthday, nationality, country, province, cp, location, address }

localhost:XXXX/users/update-password (PATCH)
BODY: { token, password _(if the profile belongs to the user)_, newPassword }

localhost:XXXX/users/change-role (PATCH)
BODY: { token, role }

localhost:XXXX/users/remove (DELETE)
BODY: { token, password _(if the profile belongs to the user)_, email _(to delete)_}


• Exams

localhost:XXXX/exams/ (GET)
localhost:XXXX/exams/upload (POST)
localhost:XXXX/exams/update (PATCH)

• Hours

localhost:XXXX/hours/ (GET)
localhost:XXXX/hours/upload (POST)
localhost:XXXX/hours/update (PATCH)

• Appointments

localhost:XXXX/appointments/ (GET)
localhost:XXXX/appointments/upload (POST)
localhost:XXXX/appointments/update (PATCH)
