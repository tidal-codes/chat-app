export function setActiveOtp(email: string) {
    const data = {
        email,
        created: Date.now()
    }
    try {
        localStorage.setItem("activeOtp", JSON.stringify(data))
    } catch (error) {
        console.error(error)
    }
}

export function clearActiveOtp() {
    localStorage.removeItem("activeOtp")
}

export function getActiveOtpEmail() {
    const data = JSON.parse(localStorage.getItem("activeOtp")!)
    return data?.email;
}