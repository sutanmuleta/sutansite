import React from "react";
import { motion } from "framer-motion";
import { animations } from "@/constants";
import Link from "../../Global/Link";

const Item1 = () => (
	<motion.li variants={animations.itemVariants}>
	  <p className="text-slate-500">01</p>
	  <Link text="Phases" href="https://smuleta.xyz" />
	  <p className="pt-2">
		Building a decentralized FemTech app for menstrual health, privacy, and equity — powered by blockchain + AI (
		<Link text="see press" href="https://t.co/Iv5CX4x8eV" />)
	  </p>
	  <p className="italic pt-5 pb-2">Founder (2024)</p>
	</motion.li>
  );
  
  const Item2 = () => (
	<motion.li variants={animations.itemVariants}>
	  <p className="text-slate-500">02</p>
	  <Link text="Polygon Guild DC" href="https://polygon.technology/community" />
	  <p className="pt-2">
		Organized workshops + hackathons to onboard developers to the Polygon ecosystem and Web3 tooling
	  </p>
	  <p className="italic pt-5 pb-2">Organizer (2023)</p>
	</motion.li>
  );
  
  const Item3 = () => (
	<motion.li variants={animations.itemVariants}>
	  <p className="text-slate-500">03</p>
	  <p>Hackathons</p>
	  <p className="pt-2">
		Girls in Tech NY, ETHGlobal Online, OSSA AI 
	  </p>
	  <p className="italic pt-5 pb-2">Participant (2022–2024)</p>
	</motion.li>
  );
  
  const WritingList = [Item1, Item2, Item3];
  
  export default WritingList;