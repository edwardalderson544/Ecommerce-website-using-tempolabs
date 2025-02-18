import React from "react";
import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

interface FooterProps {
  companyInfo?: {
    name: string;
    address: string;
    phone: string;
    email: string;
  };
  socialLinks?: {
    facebook: string;
    twitter: string;
    instagram: string;
  };
  policyLinks?: Array<{
    title: string;
    href: string;
  }>;
}

const Footer = ({
  companyInfo = {
    name: "PharmaCare Plus",
    address: "123 Health Street, Medical District",
    phone: "+1 (555) 123-4567",
    email: "contact@pharmacare.com",
  },
  socialLinks = {
    facebook: "#",
    twitter: "#",
    instagram: "#",
  },
  policyLinks = [
    { title: "Privacy Policy", href: "#" },
    { title: "Terms of Service", href: "#" },
    { title: "Shipping Policy", href: "#" },
    { title: "Return Policy", href: "#" },
  ],
}: FooterProps) => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">
              {companyInfo.name}
            </h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <p>{companyInfo.address}</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <p>{companyInfo.phone}</p>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <p>{companyInfo.email}</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#" className="hover:text-primary">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">
              Policies
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {policyLinks.map((policy, index) => (
                <li key={index}>
                  <a href={policy.href} className="hover:text-primary">
                    {policy.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              <a
                href={socialLinks.facebook}
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href={socialLinks.twitter}
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href={socialLinks.instagram}
                className="text-gray-600 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="text-center text-sm text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} {companyInfo.name}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
