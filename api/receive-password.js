export default function handler(req, res) {
    if (req.method === "POST") {
        const { password } = req.body;

        console.log("Password received:", password);
        res.status(200).json({
            message: "Password received successfully",
            receivedPassword: password,
        });
    } else {
        res.status(405).json({
            message: "Method Not Allowed. Use POST to send the password.",
        });
    }
}
