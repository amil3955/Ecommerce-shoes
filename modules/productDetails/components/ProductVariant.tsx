import { useState } from 'react';

import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

import { defaultEase } from '@/common/animations/easings';

const ProductVariant = ({
  image,
  selected = false,
}: {
  image: StaticImageData;
  selected?: boolean;
}) => {
  const [active, setActive] = useState(false);

  return (
    <a
      className={`block h-32 w-32 cursor-pointer overflow-hidden rounded-md ${
        selected && 'border-2 border-black'
      }`}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      tabIndex={0}
    >
      <motion.div
        transition={{
          duration: 0.3,
          ease: defaultEase,
        }}
        animate={{ scale: active ? 1.07 : 1 }}
        className="h-full w-full"
      >
        <Image
          src={image}
          placeholder="blur"
          alt="title"
          layout="raw"
          className="h-full w-full object-cover"
        />
      </motion.div>
    </a>
  );
};

export default ProductVariant;