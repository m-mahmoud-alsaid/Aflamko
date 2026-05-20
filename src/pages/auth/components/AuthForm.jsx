import Image from '../../../assets/imgs/login.png';

function AuthForm({
    type,
    handleSubmit = () => { },
    loading,
    formData,
    setFormData
}) {

    const fields = {
        email: {
            name: "email",
            label: "Email",
            type: "email",
            placeholder: "Enter your email"
        },
        password: {
            name: "password",
            label: "Password",
            type: "password",
            placeholder: "Enter your password"
        },
        name: {
            name: "name",
            label: "Name",
            type: "text",
            placeholder: "Enter your name"
        },
        photo: {
            name: "photo",
            label: "Photo",
            type: "url",
            placeholder: "Enter photo URL"
        }
    };

    const registerInfo = {
        title: "create account.",
        subtitle: "Join us and explore thousands of movies.",
        button: "Create"
    };

    const config = {
        login: {
            title: "Welcome back!",
            subtitle: "Login to continue watching.",
            fields: [fields.email, fields.password],
            button: "Login"
        },

        register: {
            ...registerInfo,
            fields: [fields.email, fields.password]
        },

        registerStepTwo: {
            ...registerInfo,
            fields: [fields.name, fields.photo]
        },
    };

    const current = config[type];

    if (!current) return null;

    return (
        <div className="flex items-center justify-center w-screen h-screen z-0 p-5 relative overflow-x-hidden overflow-y-auto">

            <img
                src={Image}
                alt="background"
                className="absolute -z-10 w-full h-full object-cover"
            />

            <div className="absolute -z-5 w-full h-full bg-black/50"></div>

            <div className="backdrop-blur-md p-5 rounded-2xl border-3 border-primary w-full sm:w-md bg-[#0B0B0F]/70 shadow-[0_10px_15px_#e50914]">

                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-primary font-bold text-3xl md:text-4xl lg:text-5xl uppercase mb-8">
                        aflamko
                    </h1>

                    <p className="text-primary-text capitalize font-bold text-lg md:text-xl lg:text-2xl">
                        {current.title}
                    </p>

                    <p className="text-secondary-text md:text-lg lg:text-xl">
                        {current.subtitle}
                    </p>
                </div>

                {/* Form */}
                <form
                    className="flex flex-col gap-10"
                    onSubmit={handleSubmit}
                >

                    {current.fields.map((field) => (
                        <label
                            key={field.name}
                            className="flex flex-col text-primary-text focus-within:text-primary duration-300"
                        >
                            <span className="mb-2.5 after:ml-1 after:text-red-500 after:content-['*'] md:text-lg lg:text-xl">
                                {field.label}
                            </span>

                            <input
                                type={field.type}
                                placeholder={field.placeholder}
                                value={formData[field.name] || ""}
                                disabled={loading}
                                onChange={(e) =>
                                    setFormData((prev) => ({
                                        ...prev,
                                        [field.name]: e.target.value
                                    }))
                                }
                                className="bg-card rounded-xl border-2 border-border outline-0 p-2 pl-2.5 text-secondary-text focus:border-primary focus:text-primary focus:placeholder:text-primary duration-300"
                            />
                        </label>
                    ))}

                    <input
                        type="submit"
                        disabled={loading}
                        value={current.button}
                        className="w-full pt-2 pb-2 bg-primary border-border font-bold md:text-lg lg:text-xl border-2 block mr-auto ml-auto rounded-lg text-primary-text hover:text-primary hover:bg-hover duration-300"
                    />

                </form>
            </div>
        </div>
    );
}

export default AuthForm;