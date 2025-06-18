import React from "react";
import { motion } from "framer-motion";
import { animations } from "@/constants";
import Link from "@/components/Global/Link";

const Item1 = () => {
	return (
	  <motion.li variants={animations.itemVariants} className="list-none">
		<div className="bg-[#7A4B4B] text-white font-medium text-sm max-w-xl mx-auto text-left leading-relaxed tracking-tight rounded-xl p-4 shadow-sm">
		  <p>
			The problem I care most about is who controls intelligence and who gets to benefit from it. I think{" "}
			<span className="font-bold" style={{ color: "#000000" }}>
			  decentralized AI
			</span>{" "}
			is the key — not just to protecting privacy, but to reshaping how knowledge is created, owned, and shared.
		  </p>
		</div>
	  </motion.li>
	);
  };
  
  
  
  
  
  
  
					
  
  
  const Item2 = () => (
	<motion.li variants={animations.itemVariants} className="list-none">
	  <p className="text-white">01</p>
	  <div className="text-sm text-white">
		Thus, I'm currently researching the JAM Protocol, building on{" "}
		<Link
		  text="Phala Network’s decentralized AI infrastructure"
		  href="https://docs.phala.network/legacy/ai-agent-contract"
		/>
		, studying work from{" "}
		<Link
		  text="MIT’s Decentralized Intelligence group"
		  href="https://www-prod.media.mit.edu/projects/decentralized-ai/overview/"
		/>
		, and experimenting with{" "}
		<Link
		  text="Nanda servers"
		  href="https://github.com/aidecentralized/nanda-servers"
		/>
		.
		<br />
		<Link text="Gray Paper" href="https://graypaper.com/" />.
	  </div>
	</motion.li>
  );
  
 

  const Item3 = () => (
	<motion.li variants={animations.itemVariants} className="list-none">
	  <p className="text-slate-500">02</p>
	  <div className="text-sm text-white font-semibold">
		Studing cs
	  </div>
	</motion.li>
  );
  

const Item4 = () => (
	<motion.li variants={animations.itemVariants} className="list-none">
	  <p className="text-white">03</p>
	  <div className="text-sm text-white">
		Reading an egregious amount of social commentary Substacks. 
		Currently exploring <a href="https://johnathanbi.com" target="_blank" rel="noopener noreferrer" className="underline">
		  Jonathan Bi’s philosophy lectures
		</a>.
	  </div>
	</motion.li>
  );
  

const CurrentList = [Item1, Item2, Item3, Item4];

export default CurrentList;
