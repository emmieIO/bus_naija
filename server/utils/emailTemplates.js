export const verifyAccountMail = (firstname, code)=>{
    return`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <title>Email Message</title>
    <style>
        body {
            font-family: "Poppins", system-ui, Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
        }
        a, a:visited, a:active, a:focus {
            text-decoration: none;
            color: #fff;
        }

        .container {
            max-width: 600px;
            margin: 40px auto;
            background-color: #fff;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #34C759; /* Green color to indicate success */
            color: #fff;
            padding: 10px;
            text-align: center;
            border-radius: 10px 10px 0 0;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .content {
            padding: 20px;
        }
        .content h2 {
            margin-top: 0;
        }
        .button {
            background-color: #34C759; /* Green color to indicate success */
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .button:hover {
            background-color: #36D76A;
        }
        .footer {
            background-color: #34C759; /* Green color to indicate success */
            color: #fff;
            padding: 10px;
            text-align: center;
            border-radius: 0 0 10px 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Verify Account</h1>
        </div>
        <div class="content">
            <h2>One-Time Password (OTP)</h2>
            <p>Dear ${firstname},</p>
            <p>We have sent a one-time password (OTP) to your mobile number. Please enter the OTP below to complete the process.</p>
            <p>Your OTP is: <span class="font-bold">${code}</></p>
            <p>If you didn't initiate this process, please ignore this mail</p>

            <div>
                <em>Warm Regards,</em>
                <br>
                <strong>BusNaija Team.</strong>
            </div>
        </div>
        <div class="footer">
            <p>&copy; ${process.env.YEAR} ${process.env.APP_NAME}. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`
}

export const welcomeMail = (firstname)=>{
    return`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <title>Welcome to BusNaija</title>
    <style>
        body {
            font-family: "Poppins", system-ui, Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
        }
        a, a:visited, a:active, a:focus {
            text-decoration: none;
            color: #fff;
        }
        .container {
            max-width: 600px;
            margin: 40px auto;
            background-color: #fff;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #34C759; /* Green color to indicate success */
            color: #fff;
            padding: 10px;
            text-align: center;
            border-radius: 10px 10px 0 0;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .content {
            padding: 20px;
        }
        .content h2 {
            margin-top: 0;
        }
        .button {
            background-color: #34C759; /* Green color to indicate success */
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .button:hover {
            background-color: #36D76A;
        }
        .footer {
            background-color: #34C759; /* Green color to indicate success */
            color: #fff;
            padding: 10px;
            text-align: center;
            border-radius: 0 0 10px 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Welcome to BusNaija 🚌!</h1>
        </div>
        <div class="content">
            <div>

            </div>
            <p>Dear ${firstname},</p>
            <p>We’re thrilled to have you on board. With us, booking your next travel experience is just a few clicks away. Whether you're planning a quick getaway or a long trip, we’re here to make your journey smooth and hassle-free</p>
            <strong>Here's what to expect;</strong>
            <ul>
                <li>Access to a wide range of bus operators and routes</li>
                <li>Real-time bus schedules and ticket prices</li>
                <li>Secure payment options</li>
                <li>24/7 customer support</li>
            </ul>
            <p>If you have any questions or need assistance, feel free to reply to this email or contact our support team at [Support Email].</p>

            <p>Thank you for choosing BusNaija Let’s make every trip memorable!</p>
            <strong>Nnaemeka Mark Onuoha</strong>
            <p>BusNaija Team </p>
            <p>Safe travels!</p>
        </div>
        <div class="footer">
            <p>&copy; ${process.env.YEAR} <a href="${process.env.APP_URL}">${process.env.APP_NAME}</a>. All rights reserved.</p>
        </div>
    </div>
</body>
</html>`
}

export const passwordResetMail = (firstname, token)=>{
    return`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <title>Password Reset</title>
    <style>
        body {
            font-family: "Poppins", system-ui, Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
        }
        a, a:visited, a:active, a:focus {
            text-decoration: none;
            color: #fff;
        }
        .container {
            max-width: 600px;
            margin: 40px auto;
            background-color: #fff;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #34C759; /* Green color to indicate success */
            color: #fff;
            padding: 10px;
            text-align: center;
            border-radius: 10px 10px 0 0;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .content {
            padding: 20px;
        }
        .content h2 {
            margin-top: 0;
        }
        .button {
            background-color: #34C759; /* Green color to indicate success */
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .button:hover {
            background-color: #36D76A;
        }
        .footer {
            background-color: #34C759; /* Green color to indicate success */
            color: #fff;
            padding: 10px;
            text-align: center;
            border-radius: 0 0 10px 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Password Reset</h1>
        </div>
        <div class="content">
            <p>Dear ${firstname},</p>
            <p>We received a request to reset your password. If you did not make this request, please ignore this email.</p>
            <p>To reset your password, click the link below:</p>
            <a href="${process.env.NODE_ENV === 'production' ?
                "https://bus-naija-1.onrender.com/reset-password?token="+token :
                "http://localhost:5173/reset-password?token="+token
            }" class="button">Reset Password</a>
            <p>If you have any questions or need assistance, feel free to reply to this email or contact our support team at ${process.env.SUPPORT_MAIL}</p>
            <p>Best regards,</p>
            <p>Nnaemeka Mark Onuoha</p>
            <strong>BusNaija Team</strong>
        </div>
        <div class="footer">
            <p>&copy; ${process.env.YEAR} <a href="${process.env.APP_URL}">${process.env.APP_NAME}</a>. All rights reserved.</p>
        </div>
    </div>
</body>
</html>`
}

export const passwordResetSuccessMail = (firstname)=>{
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <title>Password Reset Successful</title>
    <style>
        body {
            font-family: "Poppins", system-ui, Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f9f9f9;
        }
        a, a:visited, a:active, a:focus {
            text-decoration: none;
            color: #fff;
        }

        .container {
            max-width: 600px;
            margin: 40px auto;
            background-color: #fff;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #34C759; /* Green color to indicate success */
            color: #fff;
            padding: 10px;
            text-align: center;
            border-radius: 10px 10px 0 0;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .content {
            padding: 20px;
        }
        .content h2 {
            margin-top: 0;
        }
        .button {
            background-color: #34C759; /* Green color to indicate success */
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .button:hover {
            background-color: #36D76A;
        }
        .footer {
            background-color: #34C759; /* Green color to indicate success */
            color: #fff;
            padding: 10px;
            text-align: center;
            border-radius: 0 0 10px 10px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Password Reset Successful</h1>
        </div>
        <div class="content">
            <p>Dear ${firstname},</p>
            <p>Your password has been successfully reset. You can now log in to your account using your new password.</p>
            <p>If you have any questions or need assistance, feel free to reply to this email or contact our support team at ${process.env.SUPPORT_MAIL}.</p>
            <p>Best regards,</p>
            <p>Onuoha Nnaemeka Mark</p>
            <strong>BusNaija Team</strong>
        </div>
        <div class="footer">
            <p>&copy; ${process.env.YEAR} <a href="${process.env.APP_URL}">${process.env.APP_NAME}</a>. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
    `
}