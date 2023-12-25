import { motion } from "framer-motion";
import React from "react";

function NotFoundPage() {
  return (
    <div className="page-content">
      <motion.div
        className="content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="big-title">Oops ! 404</div>
      </motion.div>
    </div>
  );
}

export default NotFoundPage;
