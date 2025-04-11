import Link from "next/link";

export default function ContatctDetails() {
  return (
    <div className="flex flex-col rounded-md border border-site-primary flex-1 md:flex-1/2">
      <div className="w-full h-[4rem] lg:h-[4.5rem] flex justify-center items-center bg-site-primary rounded-t-md text-white lg:text-xl text-lg font-semibold text-center">
        Contact Details
      </div>
      <div className="flex flex-col gap-6 p-4 lg:p-6 xlg:p-8 shadow-custom ">
        <div className="flex flex-col gap-1">
          <h1 className="xl:text-xl lg:text-lg text-base font-semibold text-site-primary">
            Address:
          </h1>
          <Link
            href={"https://maps.app.goo.gl/RwnUZHjKgFwgynpw7"}
            referrerPolicy="no-referrer"
            target="_blank"
            className="xl:text-lg lg:text-base text-sm text-site-gray"
          >
            NJP Main Road, Ward No. 35, Bhaktinagar Siliguri, Darjeeling -
            734007
          </Link>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="xl:text-xl lg:text-lg text-base font-semibold text-site-primary">
            Phone:
          </h1>
          <div className="flex gap-2">
            <Link
              href={`tel:+917384859939`}
              className="xl:text-lg lg:text-base text-sm text-site-gray inline"
            >
              +91 73848 59939
            </Link>{" "}
            /
            <Link
              href={`tel:+918918152570`}
              className="xl:text-lg lg:text-base text-sm text-site-gray inline"
            >
              89181 52570
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="xlg:text-xl lg:text-lg text-base font-semibold text-site-primary">
            Whatsapp:
          </h1>
          <Link
            href={`https://web.whatsapp.com/send?phone=917384859939`}
            className="xl:text-lg lg:text-base text-sm text-site-gray"
          >
            +91 73848 59939
          </Link>
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="xl:text-xl lg:text-lg text-base font-semibold text-site-primary">
            Email:
          </h1>
          <div className="flex gap-2 flex-wrap">
            <Link
              href="mailto:utpalpoddar1983@gmail.com"
              className="xl:text-lg lg:text-base text-sm text-site-gray inline"
            >
              utpalpoddar1983@gmail.com
            </Link>
            ,
            <Link
              href="mailto:poddar1893@gmail.com"
              className="xl:text-lg lg:text-base text-sm text-site-gray inline"
            >
              poddar1893@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
