import Image from "next/image";

export default function Discover() {
	return (
    <section>
      <Image
        width={900}
        height={500}
        src={
          "https://images.pexels.com/photos/20107285/pexels-photo-20107285/free-photo-of-boat-on-bled-lake-in-slovenia.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        }
      />
      <p>hello world  </p>
    </section>
  );
}