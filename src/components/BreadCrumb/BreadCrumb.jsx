import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BreadCrumb = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const pathSegments = pathname.split('/').filter((segment) => segment);

  const formatSegment = (segment) => {
    const words = segment.replace(/-/g, ' ').split(' ');
    const firstThreeWords = words.slice(0, 3).join(' ');
    return firstThreeWords.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <nav>
      <Link to="/" style={{ color: pathname === '/' ? '#52abbe' : 'white' }}>
        Home
      </Link>
      {pathSegments.length > 0 && <span style={{ color: 'white' }}> / </span>} {/* Slash in white */}
      {pathSegments.map((segment, index) => {
        const href = '/' + pathSegments.slice(0, index + 1).join('/');
        const formattedSegment = formatSegment(segment);
        const isActive = pathname === href;

        return (
          <span key={href}>
            <Link to={href} style={{ color: isActive ? '#52abbe' : 'white' }}>
              {formattedSegment}
            </Link>
            {index < pathSegments.length - 1 && <span style={{ color: 'white' }}> / </span>} {/* Slash in white */}
          </span>
        );
      })}
    </nav>
  );
};

export default BreadCrumb;
