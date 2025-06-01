import React from "react";
import { motion } from "framer-motion";
import { animations } from "@/constants";
import Link from "@/components/Global/Link";

const Item1 = () => (
	<motion.li variants={animations.itemVariants}>
	  <p className="text-slate-500">01</p>
	  <div>
		<p className="inline">AI Research Intern @</p>{" "}
		<Link text="ELVTR" href="https://elvtr.com" />{" "}
		<p className="inline">— built models for ovarian cancer detection, misinformation classification, explainable RL, and image classification (see </p>
		<Link text="project" href="https://github.com/sutanmuleta/Brain-Tumor-Detection-Using-Convolutional-Neural-Networks-CNN" />
		<p className="inline">)</p>
	  </div>
	</motion.li>
  );
  
  
  const Item2 = () => (
	<motion.li variants={animations.itemVariants}>
	  <p className="text-slate-500">02</p>
	  <div>
		<p className="inline">DevOps Associate @</p>{" "}
		<Link text="R80 LLC" href="#" />{" "}
		<p className="inline">— restructured infrastructure and CI/CD pipelines</p>
	  </div>
	</motion.li>
  );
  
  const Item3 = () => (
	<motion.li variants={animations.itemVariants}>
	  <p className="text-slate-500">03</p>
	  <div>
		<p className="inline">Frontend + Systems Developer @</p>{" "}
		<Link text="R80 LLC" href="#" />{" "}
		<p className="inline">— built subscription logic, improved load times, and reduced user drop-off in production apps</p>
	  </div>
	</motion.li>
  );
  
  const Item4 = () => (
	<motion.li variants={animations.itemVariants}>
	  <p className="text-slate-500">04</p>
	  <div>
		<p className="inline">Technical Analyst @</p>{" "}
		<Link text="Overlapp" href="#" />{" "}
		<p className="inline">— led qualitative research on financial data + market trends using Python and analytics tools</p>
	  </div>
	</motion.li>
  );
  
  const Item5 = () => (
	<motion.li variants={animations.itemVariants}>
	  <p className="text-slate-500">05</p>
	  <div>
		<p className="inline">Blockchain Fellow @</p>{" "}
		<Link text="SheFi" href="https://www.shefi.org/" />{" "}
		<p className="inline">— built decentralized apps with Solidity + Rust and mentored women on Web3 tech tools</p>
	  </div>
	</motion.li>
  );
  
  const Item6 = () => (
	<motion.li variants={animations.itemVariants}>
	  <p className="text-slate-500">06</p>
	  <div>
		<p className="inline">VC Intern @</p>{" "}
		<Link text="H2 Ventures" href="https://h2.vc" />{" "}
		<p className="inline">— streamlined startup evaluations with data pipelines and built a custom scoring model</p>
	  </div>
	</motion.li>
  );
  
  const Item7 = () => (
	<motion.li variants={animations.itemVariants}>
	  <p className="text-slate-500">07</p>
	  <div>
		<p className="inline">internships in strategy, sales, and media @</p>{" "}
		<Link text="RippleMatch" href="https://ripplematch.com" /> <p className="inline">and</p>{" "}
		<Link text="IBS Cognet" href="#" />{" "}
		<p className="inline">— focused on growth metrics, pricing, and scaling paid campaigns</p>
	  </div>
	</motion.li>
  );
  
  const Item8 = () => (
	<motion.li variants={animations.itemVariants}>
	  <p className="text-slate-500">08</p>
	  <div>
		<p className="inline">Data Scientist @</p>{" "}
		<Link text="Redo" href="https://redo.io" />{" "}
		<p className="inline">— reaserched poc for  an open-source eligibility model with Stanford Law to filter 100K+ prison cases for resentencing</p>
	  </div>
	</motion.li>
  );

  const Item9 = () => (
	<motion.li variants={animations.itemVariants}>
	  <p className="text-slate-500">09</p>
	  <div>
		<p className="inline">Paid Media Fellow @</p>{" "}
		<Link text="Alpha School" href="#" />{" "}
		<p className="inline">— developed marketing briefs and scaled ad budgets while maintaining customer acquisition costs</p>
	  </div>
	</motion.li>
  );
  
  
  
  
  const PastList = [
	Item1,
	Item2,
	Item3,
	Item4,
	Item5,
	Item6,
	Item7,
	Item8,
	Item9,
  ];
  
  export default PastList;
  