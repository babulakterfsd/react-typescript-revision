# Let's Boom :

[https://www.youtube.com/watch?v=zLyeWSfTMa8&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&index=5&ab_channel=Codevolution]

1.  props akare ja ashbe setar type direct define kore deya
2.  children akare string ba onno kichu gele seta define kore deya
3.  children akare jodi kono component jay , tahole tar type hobe React.ReactNode. ar props akare jodi component pathano hoy tahole tar type hobe React.ComponentType [https://www.youtube.com/watch?v=qvdnTfyv7y8&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&index=18&ab_channel=Codevolution]

4.  kono props er value jodi nirdisto kichu hoy, tahole seta direct likhe deya jaay oi component er jekhane prop types define kora hoy , sekhane .. jemon

type StatusProps = {
status: 'loading' | 'success' | 'error'
}

ekhon ei Status component jekhan thekei call koruk, status naame je props ashbe, tar value sunirdisto vabe oi tintar ektai hote hobe.

5. button click er khetre event er type hoy React.MouseEvent< HTMLButtonElement >
6. input event er onChange event er khetre type hoy React.ChangeEvent< HTMLInputElement >
7. jodi css styles props akare ashe, tahole tar type hoy React.CSSProperties
8. ekta valo project structure maintain korte gele ashole ekta pattern follow kora uchit. jemon kono ekta component er prop types oi component er jsx define krar uporei na likhe different ekta file e likhe sekhan theke import kore ana uchit. jemon Person namok ekta component er prop types gula thakbe person.types.ts file e

9. type gula reuse kora jay ekta type ke ar ekta type er jekono property er type hishebe use kore.

10. generics er moddhe or operator diye multiple type define kore deya jay.
    type authUser = {
    name: string;
    email: string
    }

    const [user, setUser] = useState< authUser | null >(null)
    //login
    const handleLogin = () => {
    setuser({
    name: 'Babul',
    email: 'babulakterfsd@gmil.com'
    })
    }
    //logout
    const handleLogout = () => {
    setUser(null)
    }

    return (
    < div >
    < p > {user?.name} </ p > // chaining na korle user to null o hote pare, tkhn error dibe.
    < / div >
    )

    maane ekhane initial value deya hoyeche null, but future e change hote pare user er type. tai aage thekei logical or use kore evabe deya hoyeche.

11. ts with react e kivabe useState use kora hoy generics er sathe, seta User component dekhano hoyeche
12. type assertion naamer ekta jinish ache. jemon 11 number point er khetre jodi emon hoy j user ekbar login korle ar logout korbe na ba jekono karonei hok, user always thakbe.. tahole to shob jaygay optional chaining use korar dorkar nai. sekhetre type assertion use korte pari evabe :
    const [user, setUser] = useState< authUser >({} as authUser)

    bass hoye gelo. kintu sabdhanota obolombon kora uchit eta use korar khetre .

13. useRef use korar somoy evabe type guard use korte hoy.. maane condition check korte hoy. karon typescript j current er value pabei tar kono guaranty nai.

const emailRef = useRef<HTMLInputElement>(null);

useEffect(() => {
if (emailRef.current) {
emailRef.current.focus();
}
}, []);

<input
type='email'
placeholder='email'
name='email'
className='border-2 mr-2 focus:outline-none'
ref={emailRef}
onChange={(e) => setEmail(e.target.value)}
/>

14. generics er jonno dashboard er moddhe userList namer ekta component baniyechi. okhane shob deya ache kivabe generics use korte hoy.

15. props restriction ar never er use niye ei video ta best [https://www.youtube.com/watch?v=yqn9Fkv7f2M&list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK&index=20&ab_channel=Codevolution]

16.
