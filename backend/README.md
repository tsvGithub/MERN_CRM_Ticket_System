CRM Client side API

API Resources

## User API Resources

All the user API router follows '/v1/user'

# Routers Verbs Is Private Description

1 /login POST No Verify user Authentication and return JWT; <br> --- 2 /request-reset-password POST No Verify email and email pin to reset the password; --- 3 /reset-password PUT No Replace with new password; 4 /{id} GET Yes Get users Info

## Ticket API Resources

All the user API router follows '/v1/ticket'

# Routers Verbs Is Private Description

1 / GET Yes Get all ticket for the logined in user; 2 /{id} GET Yes Get a ticket detsils; 3 / POST Yes Create a new ticket 4 /{id} PUT Yes Update ticket detsils ie. reply message; 5 /close-ticket/{id} PUT Yes Update ticket detsils ie. reply message
