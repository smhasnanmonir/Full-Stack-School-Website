const Reasons = () => {
  return (
    <div>
      <h1 className="text-center text-3xl md:my-[75px]">
        Why You Should Join Summer School
      </h1>
      <div className="grid md:grid-cols-3 gap-3 max-w-7xl mx-auto ">
        <div className="p-4 bg-orange-400 rounded-lg space-y-4 hover-reasons">
          <img
            className="w-[256px]"
            src="https://i.ibb.co/zszFKm5/cameraman.png"
          />
          <h1 className="text-xl font-bold">
            Professional Training and Guidance
          </h1>
          <p>
            Joining a movie school can provide you with invaluable professional
            training and guidance. You'll have access to experienced instructors
            who can teach you the technical aspects of filmmaking, such as
            camera techniques, lighting, sound design, editing, and more. They
            can also guide you in developing your storytelling skills and
            understanding the art of visual storytelling. This structured
            learning environment can help you acquire a solid foundation in
            filmmaking and enhance your creativity.
          </p>
        </div>
        <div className="p-4 bg-orange-400 rounded-lg space-y-4 hover-reasons">
          <img
            className="w-[256px]"
            src="https://i.ibb.co/ssSLWW7/negotiation.png"
          />
          <h1 className="text-xl font-bold">Networking Opportunities</h1>
          <p>
            Movie schools often attract passionate individuals who share a
            common interest in filmmaking. By joining a movie school, you'll
            have the opportunity to connect and collaborate with like-minded
            students and build a network of contacts within the industry.
            Networking is crucial in the film industry as it can lead to future
            collaborations, job opportunities, and industry connections that may
            help you kick-start your career.
          </p>
        </div>
        <div className="p-4 bg-orange-400 rounded-lg space-y-4 hover-reasons">
          <img
            className="w-[256px]"
            src="https://i.ibb.co/PFkBgvm/growth.png"
          />
          <h1 className="text-xl font-bold">
            Access to Resources and Equipment
          </h1>
          <p>
            Movie schools typically provide access to a wide range of resources
            and equipment necessary for filmmaking. This may include
            professional-grade cameras, editing software, sound equipment, and
            production facilities. Having access to these resources can be
            expensive on your own, especially when starting out. By joining a
            movie school, you can gain hands-on experience using
            industry-standard equipment, which will better prepare you for
            real-world production scenarios.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Reasons;
